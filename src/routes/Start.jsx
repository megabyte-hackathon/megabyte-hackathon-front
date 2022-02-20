import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Start = () => {
  const [start, setStart] = useState(false);
  const [career, setCareer] = useState("");
  const [checkAnswer, setCheckAnswer] = useState(false);
  console.log("start:" + start);
  console.log("career:" + career);
  console.log("checkAnswer:" + checkAnswer);
  function checkPeriod(period) {
    setCareer(period);
    setCheckAnswer(true);
  }
  // function nextPage() {}
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
              setCheckAnswer(true);
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
      {career === "career" && !checkAnswer && (
        <CareerPeriod>
          <div onClick={() => checkPeriod(1)}>1년</div>
          <div onClick={() => checkPeriod(2)}>2년</div>
          <div onClick={() => checkPeriod(3)}>3년</div>
          <div onClick={() => checkPeriod(4)}>4년</div>
          <div onClick={() => checkPeriod(5)}>5년 이상</div>
        </CareerPeriod>
      )}
      {checkAnswer && (
        <Answer>
          <Link className="answerbox" to="/nearhome">
            <span className="house">집</span> 근처에서{"  "}
            <span className="company">회사</span> 구하기
          </Link>
          <Link className="answerbox" to="nearcompany">
            <span className="company">회사</span> 근처에서{"  "}
            <span className="house">집</span> 구하기
          </Link>
        </Answer>
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

const Answer = styled.div`
  margin: -50% 0 0 -100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  & .house {
    font-size: 3rem;
  }
  & .company {
    font-size: 3rem;
  }
  .answerbox {
    display: block;
    text-decoration: none;
    color: black;
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
