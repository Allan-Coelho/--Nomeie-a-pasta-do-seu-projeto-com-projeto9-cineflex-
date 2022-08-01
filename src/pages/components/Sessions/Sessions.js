import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Sessions({ sessions }) {
  return (
    <Container>
      {sessions.map((session) => {
        return (
          <>
            <SessionWeekday>{`${session.weekday} - ${session.date}`}</SessionWeekday>
            <HoursContainer>
              {session.showtimes.map((hour, index) => (
                <Link to={`/assentos/${hour.id}`}>
                  <Hour key={index}>{hour.name}</Hour>
                </Link>
              ))}
            </HoursContainer>
          </>
        );
      })}
    </Container>
  );
}

const Hour = styled.div`
  min-width: 82px;
  min-height: 43px;
  background-color: #e8833a;
  color: white;
  font-size: 18px;
  font-weight: 400;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  cursor: pointer;
`;

const HoursContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 22px 0px;
`;

const SessionWeekday = styled.span`
  font-size: 20px;
  font-weight: 400;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding: 0px 25px;
  margin-bottom: 117px;
`;
