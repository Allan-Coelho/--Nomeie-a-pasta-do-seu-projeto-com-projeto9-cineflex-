import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Movie({ movieData }) {
  return (
    <Link to={`/sessoes/${movieData.id}`}>
      <MovieContainer>
        <MoviePoster posterURL={movieData.posterURL}></MoviePoster>
      </MovieContainer>
    </Link>
  );
}

const MovieContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  width: 145px;
  height: 209px;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const MoviePoster = styled.div`
  background: url(${(props) => props.posterURL}) center center no-repeat;
  background-size: cover;
  width: 129px;
  height: 193px;
`;
