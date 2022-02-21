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
