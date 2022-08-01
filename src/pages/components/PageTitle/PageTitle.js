import styled from "styled-components";
export default function PageTitle({ title }) {
  return <Title>{title}</Title>;
}

const Title = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 110px;
  font-size: 24px;
  margin-top: 67px;
`;
