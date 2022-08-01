import styled from "styled-components";
export default function FooterMovie({ posterURL, movie, session = "" }) {
  return (
    <Footer>
      <MovieContainer>
        <MoviePoster posterURL={posterURL}></MoviePoster>
      </MovieContainer>
      <MovieInformation>
        {movie}
        <br></br>
        {session}
      </MovieInformation>
    </Footer>
  );
}

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 117px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 25px;
  font-size: 34px;
  font-weight: 400;
  color: #e8833a;
  background-color: #c3cfd9;
  border: 1px solid #9eadba;
`;

const MovieInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  font-size: 26px;
  color: black;
  margin-left: 15px;
`;

const MovieContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  min-width: 64px;
  height: 89px;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

const MoviePoster = styled.div`
  background: url(${(props) => props.posterURL}) center center no-repeat;
  background-size: cover;
  width: 48px;
  height: 72px;
`;
