import React , {useState} from 'react';
import styled from 'styled-components';
import loginback from '../../assets/img/loginback.png';
import axios from 'axios'

const Login = () => {
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");
    
      const handleInputId = (e) => {
      setInputId(e.target.value);
    };
  
    const handleInputPw = (e) => {
      setInputPw(e.target.value);
    };

    const onClickLogin = () => {
        console.log("click login");
        console.log("ID : ", inputId);
        console.log("PW : ", inputPw);
        axios.post("api/login", {
            email: inputId,
            passwd: inputPw,
          })
          .then((res) => {
            console.log(res);
            console.log("res.data.userId :: ", res.data.userId);
            console.log("res.data.msg :: ", res.data.msg);
            if (res.data.email === undefined) {
              // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
              console.log("======================", res.data.msg);
              alert("입력하신 id 가 일치하지 않습니다.");
            } else if (res.data.email === null) {
              // id는 있지만, pw 는 다른 경우 userId = null , msg = undefined
              console.log(
                "======================",
                "입력하신 비밀번호 가 일치하지 않습니다."
              );
              alert("입력하신 비밀번호 가 일치하지 않습니다.");
            } else if (res.data.email === inputId) {
              // id, pw 모두 일치 userId = userId1, msg = undefined
              console.log("======================", "로그인 성공");
              sessionStorage.setItem("user_id", inputId); // sessionStorage에 id를 user_id라는 key 값으로 저장
              sessionStorage.setItem("name", res.data.name); // sessionStorage에 id를 user_id라는 key 값으로 저장
            }
            // 작업 완료 되면 페이지 이동(새로고침)
            document.location.href = "/home";
          })
          .catch();
      };
    return (
        <Back>
        <RegisterBox>
            <EmailBox 
            type='emai' placeholder='이메일'
            name="input_id"
            value={inputId}
            onChange={handleInputId}
            />
            <PwBox type='password' placeholder='P/W'
            name="input_pw"
            value={inputPw}
            onChange={handleInputPw}/>
            <RegisterButton onClick={onClickLogin}>로그인</RegisterButton>
        </RegisterBox>
        </Back>
    );
};

export default Login;

const Back = styled.div`   
    display : flex;
    justify-content : center;
    align-items: center; 
    background : url(${loginback});
    background-size : cover;
    width : 100%;
    height : 100%;
`;

const RegisterBox = styled.form`
    display : flex;
    width : 500px;
    height : 400px;
    border-radius : 30px;
    align-items: center;
    flex-direction: column;
    background-color : #FFEF9B;
`;


const InputBox = styled.input`
    margin-top : 50px;
    width : 300px;
    hegiht : 300px;
    border-radius : 30px;
    border : none;
    padding : 20px;
    font-size: 25px;
    color : #232323
    outline: none;

    &::placeholder{
		color: #232323;
	}

	&:hover{

	}

	&:focus{
        outline: none;
	}
`;


const EmailBox = styled(InputBox)`
    background-color : #FFD90F;
`;

const PwBox = styled(InputBox)`
    background-color : #FFD90F;
`;

const RegisterButton = styled.div`
position :absolute;
    top: 55%;
    margin-top : 30px;
    width : 200px;
    hegiht : 300px;
    text-align : center;
    border-radius : 30px;
    border : none;
    padding : 20px;
    background-color : #FFD90F;
    font-family:'chab';
    font-size:25px;
    font-weight : 700;
    color : #232323;
    box-shadow: 0px 5px 0px 0px #A66615;

    &:hover{
       top:56%;
        box-shadow: 0px 0px 0px 0px #A66615;
	}

`;