import { Container, LoginButton } from "./styles";
import Success from '../../assets/sucesso.svg'
import { Title } from "../Sucesso/styles";

export function Sucesso() {
  return (
    <Container className="shadow-lg">
      <Title className="leading-tight text-center ">Cadastro efetuado com sucesso</Title>
      <img src={Success} alt="Sucesso" />
      <LoginButton>Efetuar login</LoginButton>
    </Container>
  )
}