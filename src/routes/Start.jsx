import { useState } from "react";
import styled from "styled-components";

const Start = () => {
  const [start, setStart] = useState(false);
  const [career, setCareer] = useState("");
  console.log(start);
  console.log(career);
  function nextPage() {}
  return (
    <StartBody>
      {!start && (
        <SetBtn
          onClick={() => {
            setStart(!start);
          }}
        >
          START
        </SetBtn>
      )}
      {start && !career && (
        <CareerSelect>
          <div
            onClick={() => {
              setCareer("new");
            }}
          >
            신입
          </div>
          <div
            onClick={() => {
              setCareer("career");
            }}
          >
            경력
          </div>
        </CareerSelect>
      )}
      {career === "career" && (
        <CareerPeriod>
          <div>1년</div>
          <div>2년</div>
          <div>3년</div>
          <div>4년</div>
          <div>5년 이상</div>
        </CareerPeriod>
      )}
    </StartBody>
  );
};

const StartBody = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`;
const SetBtn = styled.div`
  margin: -100% 0 0 -100%;
  border: 1px solid black;
  border-radius: 2rem;
  font-size: 2.5rem;
  text-align: center;
  padding: 0.8rem 1rem 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    background-color: red;
    color: white;
    border: 1px solid red;
  }
`;
const CareerSelect = styled.div`
  margin: -100% 0 0 -100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  div {
    text-align: center;
    border: 1px solid black;
    border-radius: 2rem;
    padding: 0.8rem 1rem 0.5rem 1rem;
    font-size: 2.5rem;
    margin: 1rem;
    cursor: pointer;
    &:hover {
      background-color: blue;
      color: white;
      border: 1px solid blue;
    }
  }
`;

const CareerPeriod = styled.div`
  margin: -150% 0 0 -100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  div {
    text-align: center;
    border: 1px solid black;
    border-radius: 2rem;
    padding: 0.8rem 0rem 0.5rem 0rem;
    font-size: 2.5rem;
    margin: 1rem;
    cursor: pointer;
    &:hover {
      background-color: blue;
      color: white;
      border: 1px solid blue;
    }
  }
`;

export default Start;
