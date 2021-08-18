import { Container, Title, SignButton, LoginButton, ButtonContainer } from "./styles";
import Olho from '../../assets/eye.svg'
import OlhoFechado from '../../assets/closeeye.svg'
import { useState } from "react";

export function Login() {
  const [passVisible, setPassVisible] = useState(true);
  return (
    <div className="maincontent shadow-lg rounded-3xl">
      <Title>Login</Title>
      <Container>
        <input type="text" placeholder="E-mail" className=" h-full w-full outline-none" />
      </Container>
      <Container>
        <input type={passVisible ? 'password' : 'text'} placeholder="Senha" className=" h-full w-full outline-none" />
        <button className="w-6" onClick={() => setPassVisible(!passVisible)}>
          <img src={passVisible ? Olho : OlhoFechado} alt="" /></button>
      </Container>
      <ButtonContainer>
        <LoginButton>Entrar</LoginButton>
        <SignButton>Cadastrar</SignButton>
      </ButtonContainer>
    </div >
  )
}