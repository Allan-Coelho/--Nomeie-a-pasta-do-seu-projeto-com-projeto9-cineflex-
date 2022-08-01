import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FooterMovie from "../components/FooterMovie/FooterMovie";
import Movie from "../components/Movie/Movie";

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
    <FooterMovie posterURL={sessionData.movie.posterURL} />
  );
}
