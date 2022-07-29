import react from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Movie from "../components/Movie/Movie";
import axios from "axios";

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
      <HeaderLogo>CINEFLEX</HeaderLogo>
      <Container>
        <SelectMovie>Selecione o filme</SelectMovie>
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
  margin-top: 67px;
  padding: 0px 25px;
`;

const HeaderLogo = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 67px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 34px;
  font-weight: 400;
  color: #e8833a;
  background-color: #c3cfd9;
`;

const SelectMovie = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 110px;
  font-size: 24px;
`;
