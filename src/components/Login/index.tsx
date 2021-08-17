import { Container, Title, SignButton, LoginButton, ButtonContainer, RecoverPassword } from "./styles";

export function Login() {
  return (
    <div className="maincontent shadow-lg rounded-3xl">

      <Title>Login</Title>
      <Container>
        <input type="text" placeholder="E-mail" className=" h-full w-full outline-none" />
      </Container>
      <Container>
        <input type="password" placeholder="Senha" className=" h-full w-full outline-none" />
      </Container>
      <ButtonContainer>
        <LoginButton>Entrar</LoginButton>
        <SignButton>Cadastrar</SignButton>
      </ButtonContainer>
    </div >
  )
}