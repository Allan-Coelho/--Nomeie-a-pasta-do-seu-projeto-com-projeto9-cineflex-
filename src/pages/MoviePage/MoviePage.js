import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../components/PageTitle/PageTitle";
import HeaderLogo from "../components/HeaderLogo/HeaderLogo";
import Sessions from "../components/Sessions/Sessions";
import FooterMovie from "../components/FooterMovie/FooterMovie";

export default function MoviePage() {
  const { idFilme } = useParams();
  const [movieData, setMoviesData] = useState(null);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`
    );

    promise.then((response) => {
      setMoviesData(response.data);
    });
  }, []);

  return (
    <>
      <HeaderLogo />
      <PageTitle title="Selecione o Horário" />
      {movieData === null ? (
        ""
      ) : (
        <>
          <Sessions sessions={movieData.days} />
          <FooterMovie
            posterURL={movieData.posterURL}
            movie={movieData.title}
          />
        </>
      )}
    </>
  );
}
