import React, { useState, useEffect } from "react";
import styled from "styled-components";
import background from "../../assets/img/gamebackground.png";
import IngredientStack from "./IngredientStack";
import OrderStack from "./OrderStack";

const GamePage = () => {
  return (
    <Back>
      <IngredientStack />
      {/* <OrderStack /> */}
    </Back>
  );
};

export default GamePage;

const div = styled.div``;

const Back = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #e3dfdf;
  background-size: cover;
`;
