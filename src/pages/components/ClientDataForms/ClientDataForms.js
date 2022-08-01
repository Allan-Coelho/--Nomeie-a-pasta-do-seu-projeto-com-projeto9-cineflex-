import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function ClientDataForms({
  selectedSeats,
  session,
  setSeats,
  setSelectedSeats,
  setSessionData,
}) {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const navigate = useNavigate();

  function formsResponseHandler(event) {
    event.preventDefault();

    if (selectedSeats.length === 0) {
      alert("Você precisa selecionar, ao menos, um assento");
      return;
    }

    const promise = axios.post(
      "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
      {
        ids: selectedSeats.map((seat) => seat.id),
        name: name,
        cpf: cpf,
      }
    );

    promise.then(() => {
      navigate("/sucesso", {
        state: {
          seats: selectedSeats,
          session: session,
          name: name,
          cpf: cpf,
        },
      });
    });
  }

  return (
    <Container onSubmit={formsResponseHandler}>
      <Label>
        {" "}
        Nome do Comprador:
        <FormsInput
          type="text"
          placeholder="Digite seu nome..."
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Label>
      <Label>
        {" "}
        CPF do comprador:
        <FormsInput
          pattern="([0-9]{3}?[0-9]{3}?[0-9]{3}?[0-9]{2})"
          type="text"
          placeholder="Digite seu CPF..."
          onChange={(e) => setCpf(e.target.value)}
          required
        />
      </Label>
      <SubmitButton type="submit">Reservar assento(s)</SubmitButton>
    </Container>
  );
}

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 225px;
  height: 42px;
  background: #e8833a;
  border-radius: 3px;
  color: white;
  font-size: 18px;
  margin-top: 15px;
  border: 1px solid #e8833a;
  cursor: pointer;
`;

const Label = styled.label`
  font-size: 18px;
  margin-top: 10px;
`;

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 0px 25px;
  margin-top: 20px;
`;

const FormsInput = styled.input.attrs(() => ({ tabIndex: 0 }))`
  border: 1px solid #d5d5d5;
  border-radius: 3px;
  height: 51px;
  width: 100%;

  &::placeholder {
    font-size: 18px;
    font-style: italic;
  }
`;
