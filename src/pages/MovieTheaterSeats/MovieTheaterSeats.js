import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ClientDataForms from "../components/ClientDataForms/ClientDataForms";
import FooterMovie from "../components/FooterMovie/FooterMovie";
import HeaderLogo from "../components/HeaderLogo/HeaderLogo";
import PageTitle from "../components/PageTitle/PageTitle";
import Seats from "../components/Seats/Seats";

export default function MovieTheaterSeats() {
  const { idSessao } = useParams();
  const [sessionData, setSessionData] = useState(null);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
    );

    promise.then((response) => {
      setSessionData(response.data);
    });
  }, []);
  return sessionData === null ? (
    ""
  ) : (
    <>
      <HeaderLogo />
      <PageTitle title="Selecione o(s) assento(s)" />
      <Container>
        <Seats seatsData={sessionData.seats} session={sessionData} />
      </Container>

      <FooterMovie
        posterURL={sessionData.movie.posterURL}
        movie={sessionData.movie.title}
        session={`${sessionData.day.weekday} - ${sessionData.name}`}
      />
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0px 25px;
  margin-bottom: 117px;
`;
