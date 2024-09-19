// src/pages/SignPage.tsx

import styled from "styled-components";
import iphone from "../assets/iphone.png";
import logo from "../assets/logo.svg";
import { useState } from "react";
import SignInForm from "../components/sign/SignInForm"; //로그인 폼
import SignUpForm from "../components/sign/SignUpForm"; //회원가입 폼

const Main = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const IphoneImg = styled.img`
  height: 500px;
`;

const SignSection = styled.section`
  width: 300px;
  margin-left: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid var(--color-grey-2);
`;

const LogoImg = styled.img`
  width: 70%;
  height: 20%;
  padding: 30px 0;
`;

/*
상태 관리와 조건부 렌더링
*/
/*
상태(state) 초기화: useState를 사용하여 isSignIn이라는 상태를 정의. 
현재 로그인 화면을 보여줄지(true), 회원가입 화면을 보여줄지(false) 결정. 
초기값은 false로 설정되어 회원가입 폼이 처음에 표시됩니다.
*/
const SignPage = () => {
  const [isSignIn, setIsSignIn] = useState(false);

	/*
	페이지 렌더링
	isSignIn 상태에 따라 다른 폼이 렌더링
	*/
  return (
    <Main>
      <IphoneImg src={iphone} />
      <SignSection>
        <LogoImg src={logo} />
        {isSignIn ? <SignInForm /> : <SignUpForm />}
        
      </SignSection>
    </Main>
  );
};

export default SignPage;