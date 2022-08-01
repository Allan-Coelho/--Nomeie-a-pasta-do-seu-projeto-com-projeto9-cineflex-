import { useState } from "react";
import styled from "styled-components";
import ClientDataForms from "../ClientDataForms/ClientDataForms";

export default function Seats({ seatsData, session, setSessionData }) {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seats, setSeats] = useState(
    seatsData.map((seat) => {
      return { ...seat, isSelected: false };
    })
  );

  function seatSelectionHandler(seatID) {
    const updatedSeats = seats.map((seat) => {
      if (seatID === seat.id) {
        if (seat.isSelected === true) {
          setSelectedSeats(
            selectedSeats.filter((seatSelected) => {
              if (seatSelected.id !== seatID) {
                return seatSelected;
              }
            })
          );

          return { ...seat, isSelected: false };
        }
        setSelectedSeats([...selectedSeats, seat]);
        return { ...seat, isSelected: true };
      }
      return seat;
    });
    setSeats([...updatedSeats]);
  }

  return (
    <>
      <SeatsContainer>
        {seats.map((seat) => {
          return seat.isAvailable ? (
            <SeatStyle
              isAvailable={true}
              isSelected={seat.isSelected}
              onClick={() => seatSelectionHandler(seat.id)}
            >
              {seat.name}
            </SeatStyle>
          ) : (
            <SeatStyle
              onClick={() => {
                alert("Esse assento não está disponível");
              }}
              isAvailable={false}
            >
              {seat.name}
            </SeatStyle>
          );
        })}
      </SeatsContainer>
      <SeatsSubtitleContainer>
        <SeatsSubtitle>
          <SeatStyle isSelected={true} isAvailable={true}></SeatStyle>
          <span>Selecionado</span>
        </SeatsSubtitle>
        <SeatsSubtitle>
          <SeatStyle isAvailable={true}></SeatStyle>
          <span>Disponível</span>
        </SeatsSubtitle>
        <SeatsSubtitle>
          <SeatStyle isAvailable={false}></SeatStyle>
          <span>Indisponível</span>
        </SeatsSubtitle>
      </SeatsSubtitleContainer>
      <ClientDataForms selectedSeats={selectedSeats} session={session} setSeats={setSeats} setSelectedSeats={setSelectedSeats} setSessionData={setSessionData}/>
    </>
  );
}

const SeatStyle = styled.div`
  border-radius: 50%;
  background-color: ${(props) =>
    props.isAvailable
      ? (props) => (props.isSelected ? "#8DD7CF" : "#C3CFD9")
      : "#FBE192"};
  height: 26px;
  width: 26px;
  font-size: 11px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 7px 6px 7px 0px;
  border: 1px solid
    ${(props) =>
      props.isAvailable
        ? (props) => (props.isSelected ? "#45BDB0" : "#808F9D")
        : "#F7C52B"};
  cursor: ${(props) => (props.isAvailable ? "pointer" : "default")};
`;

const SeatsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const SeatsSubtitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 16px;
`;
const SeatsSubtitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
