import React, { useState, useEffect } from "react";
import styled from "styled-components";
import patty from "../../assets/img/patty.png";
import tomato from "../../assets/img/tomato.png";
import lettuce from "../../assets/img/lettuce.png";
import cheese from "../../assets/img/cheese.png";
import onion from "../../assets/img/onion.png";
import bacon from "../../assets/img/bacon.png";
import backicon from "../../assets/img/tongs.png";
import bread_top from "../../assets/img/bread_top.png";
import bread_bottom from "../../assets/img/bread_bottom.png";
import bugger from "../../assets/img/bugger.png";
import bell from "../../assets/img/bell.png";
import dish from "../../assets/img/dish.png";
import doma from "../../assets/img/doma.png";
import ordercomputer from "../../assets/img/computer.png";
import { Link } from "react-router-dom";
import OrderStack from "../game/OrderStack";

const IngredientStack = ({ orders }) => {
  const [stack, setStack] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [top, setTop] = useState(null);
  const [timeOnPage, setTimeOnPage] = useState(0);
  const [ordersMatch, setOrdersMatch] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeOnPage((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    console.log("주문 배열:", orders);
  }, [orders]);

  useEffect(() => {
    console.log("현재 스택 값:", stack);
    console.log("Top 값:", top);
  }, [stack, top]);

  const handlePush = (value) => {
    if (value === 0) {
      const newStack = [...stack, value];
      setStack(newStack);
      setTop(value);
      setErrorMessage("");
      console.log("스택에 값이 추가되었습니다:", value);

      if (Array.isArray(orders)) {
        const reversedOrders = [...orders].reverse();
        let match = true;
        for (let i = 0; i < newStack.length; i++) {
          if (newStack[i] !== reversedOrders[i]) {
            match = false;
            break;
          }
        }
        setOrdersMatch(match);
        console.log("비교 결과:", match ? 1 : 0);
      }
    } else {
      const newStack = [...stack, value];
      setStack(newStack);
      setTop(value);
      setErrorMessage("");
      console.log("스택에 값이 추가되었습니다:", value);
    }
  };

  const handlePop = () => {
    if (stack.length > 0) {
      const newStack = [...stack];
      newStack.pop();
      setStack(newStack);
      setTop(newStack.length > 0 ? newStack[newStack.length - 1] : null);
      setErrorMessage("");
      console.log("스택에서 값이 제거되었습니다.");
    } else {
      setErrorMessage("Stack is empty.");
    }
  };

  return (
    <div style={{ width: "100%", height: "100%", color: "black" }}>
      <HeaderWrapper>
        <BackButton onClick={handlePop}></BackButton>
        <h1>Time: {timeOnPage}초</h1>
      </HeaderWrapper>
      <MiddleWrapper>
        <LeftWrapper>
          <DishWrapper>
            <TopBuggerImg
              image={
                top === 0
                  ? bread_top
                  : top === 1
                  ? tomato
                  : top === 2
                  ? lettuce
                  : top === 3
                  ? onion
                  : top === 4
                  ? bacon
                  : top === 5
                  ? cheese
                  : top === 6
                  ? patty
                  : top === 7
                  ? bread_bottom
                  : null
              }
            ></TopBuggerImg>
            <Bell
              to={`/outro?time=${timeOnPage}&ordersMatch=${
                ordersMatch ? "true" : "false"
              }`}
            />
          </DishWrapper>
        </LeftWrapper>
        <RightWrapper>
          <BillWrapper>
            <OrderStack />
          </BillWrapper>
        </RightWrapper>
      </MiddleWrapper>
      <BottomWrapper>
        <DomaWrapper>
          <Ingredienttable>
            <TopIngredient
              onClick={() => top !== 0 && handlePush(0)}
              image={bread_top}
              disabled={top === 0 ? false : true}
            ></TopIngredient>
            <TopIngredient
              onClick={() => top !== 0 && handlePush(1)}
              image={tomato}
              disabled={top === 0 ? false : true}
            ></TopIngredient>
            <TopIngredient
              onClick={() => top !== 0 && handlePush(2)}
              image={lettuce}
              disabled={top === 0 ? false : true}
            ></TopIngredient>
            <TopIngredient
              onClick={() => top !== 0 && handlePush(3)}
              image={onion}
              disabled={top === 0 ? false : true}
            ></TopIngredient>
            <TopIngredient
              onClick={() => top !== 0 && handlePush(4)}
              image={bacon}
              disabled={top === 0 ? false : true}
            ></TopIngredient>
            <TopIngredient
              onClick={() => top !== 0 && handlePush(5)}
              image={cheese}
              disabled={top === 0 ? false : true}
            ></TopIngredient>
            <TopIngredient
              onClick={() => top !== 0 && handlePush(6)}
              image={patty}
              disabled={top === 0 ? false : true}
            ></TopIngredient>
            <TopIngredient
              onClick={() => top !== 0 && handlePush(7)}
              image={bread_bottom}
              disabled={top === 0 ? false : true}
            ></TopIngredient>
          </Ingredienttable>
        </DomaWrapper>
      </BottomWrapper>
    </div>
  );
};

export default IngredientStack;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 10vh;
`;
const MiddleWrapper = styled.div`
  display: flex;
  margin-top: -40px;
  width: 100%;
  height: 50vh;
  height: calc(50vh + 40px);
`;
const RightWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
const BillWrapper = styled.div`
  margin-right: 5vh;
  width: 650px;
  height: 400px;
  background-image: url(${ordercomputer});
  background-size: cover;
`;
const LeftWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: end;
`;
const DishWrapper = styled.div`
  background-position: right;
  width: 400px;
  height: 400px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${dish});
  cursor: pointer;
  margin-right: 50px;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
`;
const Bell = styled(Link)`
  position: absolute;
  top: 0;
  right: -1vh;
  top: 20px;
  width: 80px;
  height: 80px;
  background-image: url(${bell});
  background-size: cover;
  cursor: pointer;
`;
const BottomWrapper = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
`;
const DomaWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${doma});
  background-size: cover;
`;
const BackButton = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;
  background: url(${backicon});
  background-size: cover;
`;
const TopBuggerImg = styled.div`
  width: 300px;
  height: 300px;
  background: url(${(props) => props.image});
  background-size: cover;
  border-radius: 50%;
  cursor: pointer;
`;
const Ingredienttable = styled.div`
  margin: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 5%;
  justify-content: center;
  align-items: center;
`;
const TopIngredient = styled.div`
  width: 150px;
  height: 150px;
  background: url(${(props) => props.image});
  background-size: cover;
`;
