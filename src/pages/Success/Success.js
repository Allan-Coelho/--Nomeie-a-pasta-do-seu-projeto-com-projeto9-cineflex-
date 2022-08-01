import { useLocation } from "react-router-dom";
import styled from "styled-components";
import HeaderLogo from "../components/HeaderLogo/HeaderLogo";

export default function Success() {
  const location = useLocation();
  console.log(location.state);
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
  justify-content: space-between;
  align-items: center;
  padding: 0px 25px;
  margin-bottom: 117px;
`;

const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: left;
  width: 100%;
`;

const Text = styled.span`
  font-size: 22px;
`;
