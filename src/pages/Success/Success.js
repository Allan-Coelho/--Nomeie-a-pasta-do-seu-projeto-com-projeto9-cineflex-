import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import HeaderLogo from "../components/HeaderLogo/HeaderLogo";

export default function Success() {
  const location = useLocation();
  const navigate = useNavigate();

  function goToHome(event) {
    event.preventDefault();
    navigate("/");
  }

  return (
    <>
      <HeaderLogo />
      <Title>Pedido feito com sucesso!</Title>
      <Container>
        <SectionContainer>
          <Bold>Filme e Sessão</Bold>
          <Text>{`${location.state.session.movie.title}`}</Text>
          <Text>{`${location.state.session.day.date} ${location.state.session.name}`}</Text>
        </SectionContainer>
        <SectionContainer>
          <Bold>Ingressos</Bold>
          {location.state.seats.map((seat) => (
            <Text>{`Assento ${seat.name}`}</Text>
          ))}
        </SectionContainer>
        <SectionContainer>
          <Bold>Comprador</Bold>
          <Text>{location.state.name}</Text>
          <Text>{location.state.cpf}</Text>
        </SectionContainer>
      </Container>
      <SubmitButton onClick={goToHome}>Voltar para Home</SubmitButton>
    </>
  );
}

const Title = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 110px;
  font-size: 24px;
  margin-top: 67px;
  color: #247a6b;
  font-weight: 700;
`;

const Bold = styled.div`
  font-weight: 700;
  font-size: 24px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 25px;
  margin-bottom: 40px;
`;

const SectionContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  text-align: left;
  width: 100%;
  margin-bottom: 35px;
`;

const Text = styled.span`
  font-size: 22px;
  margin: 5px 0px;
`;

const SubmitButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 225px;
  height: 42px;
  background: #e8833a;
  border-radius: 3px;
  color: white;
  font-size: 18px;
  margin-top: 0px;
  border: 1px solid #e8833a;
  margin: 0 auto;
  cursor: pointer;
`;
