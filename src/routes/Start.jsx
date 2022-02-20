import styled from "styled-components";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { careerActions } from "../store/career";

const Start = () => {
  const dispatch = useDispatch();
  const career = useSelector((state) => state.career.career);
  const period = useSelector((state) => state.career.period);

  const [start, setStart] = useState(false);
  console.log("start:" + start);
  console.log("career:" + career);

  const periodHandler = (period) => {
    dispatch(careerActions.PERIOD(period));
  };

  const careerHandler = (action) => {
    dispatch(careerActions.CAREER(action));
  };

  const resetHandler = () => {
    dispatch(careerActions.RESET());
  };

  // function nextPage() {}
  return (
    <StartBody>
      {!start && resetHandler()}
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
              careerHandler("new");
            }}
          >
            신입
          </div>
          <div
            onClick={() => {
              careerHandler("career");
            }}
          >
            경력
          </div>
        </CareerSelect>
      )}
      {career === "career" && !period && (
        <CareerPeriod>
          <div onClick={() => periodHandler(1)}>1년</div>
          <div onClick={() => periodHandler(2)}>2년</div>
          <div onClick={() => periodHandler(3)}>3년</div>
          <div onClick={() => periodHandler(4)}>4년</div>
          <div onClick={() => periodHandler(5)}>5년 이상</div>
        </CareerPeriod>
      )}
      {(career === "new" || period) && (
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
