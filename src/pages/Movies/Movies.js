import react from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Movie from "../components/Movie/Movie";
import axios from "axios";
import PageTitle from "../components/PageTitle/PageTitle";
import HeaderLogo from "../components/HeaderLogo/HeaderLogo";

export default function Movies() {
  const [moviesData, setMoviesData] = react.useState(null);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    );

    promise.then((response) => {
      setMoviesData(response.data);
    });
  }, []);

  return (
    <>
      <HeaderLogo />
      <Container>
        <PageTitle title="Selecione o filme" />
        {moviesData !== null
          ? moviesData.map((movie, index) => {
              return <Movie movieData={movie} key={index} />;
            })
          : ""}
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 0px 25px;
`;
