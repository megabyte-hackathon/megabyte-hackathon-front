import styled from "styled-components";
import GeoMap from "../components/GeoMap";
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { useSelector, useDispatch } from "react-redux";
import { careerActions } from "../store/career";
import { useState } from "react";
import { Link } from "react-router-dom";

const Start = () => {
  const dispatch = useDispatch();
  const career = useSelector((state) => state.career.career);
  const period = useSelector((state) => state.career.period);
  const state = useSelector((state) => state.career.state);

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
        <Card>
          <SetCard>
            <h1>나만의 구직 카드를 만들어 보세요!</h1>
            <span>나에게 딱 맞는 맞춤 공고를 만나려면?</span>
            <button
              onClick={() => {
                setStart(!start);
              }}
            >
              START
            </button>
          </SetCard>
        </Card>
      )}
      {start && !career && (
        <Card>
          <CareerSelect>
            <div
              className="new"
              onClick={() => {
                careerHandler("new");
              }}
            >
              신입
            </div>
            <div
              className="career"
              onClick={() => {
                careerHandler("career");
              }}
            >
              경력
            </div>
          </CareerSelect>
        </Card>
      )}
      {career === "career" && !period && (
        <Card>
          <CareerPeriod>
            <div onClick={() => periodHandler(1)}>1년</div>
            <div onClick={() => periodHandler(2)}>2년</div>
            <div onClick={() => periodHandler(3)}>3년</div>
            <div onClick={() => periodHandler(4)}>4년</div>
            <div onClick={() => periodHandler(5)}>5년 이상</div>
          </CareerPeriod>
        </Card>
      )}
      {(career === "new" || period) && (
        <>
          <Select>
            <div>신입</div>
            <div>경력</div>
            {career && <div>{period}</div>}
          </Select>
          {!state && (
            <ChooseMap center={[36.064, 127.501]} zoom={7}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url=""
              />
              <GeoMap />
            </ChooseMap>
          )}
        </>
      )}
    </StartBody>
  );
};

const StartBody = styled.body``;
const Card = styled.div`
  width: 480px;
  height: 720px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #e5e5ec;
  box-sizing: border-box;
  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.12);
  border-radius: 32px;
`;
const SetCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-top: 244px;
    color: #111111;
    width: 313px;
    font-size: 40px;
    line-height: 54px;
    text-align: center;
  }
  span {
    margin-top: 20px;
    color: #767676;
    font-size: 14px;
    line-height: 20px;
  }
  button {
    margin-top: 28px;
    color: #ffffff;
    background-color: #1d1d1d;
    width: 198px;
    height: 56px;
    border: none;
    border-radius: 62px;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
  }
`;
const CareerSelect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .new {
    background-color: red;
  }
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
  display: flex;
  flex-direction: column;
  align-items: center;
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
const Select = styled.div`
  background-color: #ffffff;
  width: 480px;
  height: 720px;
  border-radius: 32px;
  border: 1px solid #ededed;
  box-sizing: border-box;
`;
const ChooseMap = styled(MapContainer)`
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 480px;
  height: 720px;
  border-radius: 32px;
  border: 1px solid #e5e5ec;
  box-sizing: border-box;
  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.12); ;
`;

export default Start;
