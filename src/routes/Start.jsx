import styled from "styled-components";
import GeoMap from "../components/GeoMap";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import { useSelector, useDispatch } from "react-redux";
import { careerActions } from "../store/career";
import { gpsActions } from "../store/gps";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();
  const navigateTo = () => navigate("/nearHome");
  const dispatch = useDispatch();

  const career = useSelector((state) => state.career.career);
  const period = useSelector((state) => state.career.period);
  const state = useSelector((state) => state.career.state);

  const [start, setStart] = useState(false);
  const [selectPeriod, setPeriod] = useState(0);

  const periodHandler = (period) => {
    dispatch(careerActions.PERIOD(period));
  };

  const careerHandler = (action) => {
    dispatch(careerActions.CAREER(action));
  };

  const resetHandler = () => {
    dispatch(careerActions.RESET());
  };

  const gpsHandler = (action) => {
    dispatch(gpsActions.GPSSET(action));
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
            <div className="or">or</div>
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
            <div className="topgradation"></div>
            <div className="botgradation"></div>
            <div className="second">
              {selectPeriod > 1 ? selectPeriod - 2 : ""}
            </div>
            <div className="first">
              {selectPeriod > 0 ? selectPeriod - 1 : ""}
            </div>
            <div className="selectPeriod">
              <div className="text">
                <span>경력</span>{" "}
                <span className="count"> {selectPeriod} </span> <span>년</span>
              </div>
              <div className="btn">
                <div className="up" onClick={() => setPeriod(selectPeriod + 1)}>
                  <svg
                    width="18"
                    height="11"
                    viewBox="0 0 18 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 10L9 2L17 10" stroke="black" stroke-width="2" />
                  </svg>
                </div>
                <div
                  className="down"
                  onClick={() => setPeriod(selectPeriod - 1)}
                >
                  <svg
                    width="18"
                    height="11"
                    viewBox="0 0 18 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 1L9 9L1 0.999998"
                      stroke="black"
                      stroke-width="2"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="first">{selectPeriod + 1}</div>
            <div className="second">{selectPeriod + 2}</div>

            <div
              className="choice-btn"
              onClick={() => periodHandler(selectPeriod)}
            >
              <svg
                width="32"
                height="23"
                viewBox="0 0 32 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 9.5L12.3158 20L30 2"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </CareerPeriod>
        </Card>
      )}
      {(career === "new" || period) && (
        <>
          {!state && (
            <ChooseMap
              center={[36.064, 127.501]}
              zoom={7}
              whenCreated={(map) => {
                map.on("click", function (e) {
                  const { lat, lng } = e.latlng;
                  gpsHandler([lat, lng]);
                  navigateTo();
                });
              }}
            >
              <TileLayer attribution="" url="" />
              <GeoMap />
              <div />
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
  padding: 223px 40px 245px 40px;
  .new {
    text-align: center;
    width: 400px;
    height: 100px;
    font-weight: bold;
    font-size: 60px;
    line-height: 100px;
    cursor: pointer;
    &:hover {
      color: #fff;
      background-color: #4876ef;
      border-radius: 20px;
    }
  }
  .career {
    text-align: center;
    width: 400px;
    height: 100px;
    font-weight: bold;
    font-size: 60px;
    line-height: 100px;
    cursor: pointer;
    &:hover {
      color: #fff;
      background-color: #4876ef;
      border-radius: 20px;
    }
  }
  .or {
    width: 32px;
    height: 28px;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #767676;
    margin: 12px 0;
  }
`;

const CareerPeriod = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  .topgradation {
    position: absolute;
    top: 155px;
    left: 43px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      #ffffff 100%
    );
    transform: rotate(-180deg);
    width: 400px;
    height: 150px;
  }
  .botgradation {
    position: absolute;
    top: 400px;
    left: 43px;
    width: 400px;
    height: 150px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      #ffffff 100%
    );
  }
  .first {
    height: 80px;
    font-size: 60px;
    line-height: 80px;
    padding-top: 10px;
    padding-bottom: 5px;
    color: #999;
    font-weight: 400;
  }
  .second {
    height: 80px;
    font-size: 50px;
    line-height: 80px;
    padding-bottom: -10px;
    color: #999;
    font-weight: 400;
  }
  span {
    font-size: 32px;
    line-height: 46px;
    text-align: center;
    color: #111111;
  }
  .selectPeriod {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #f0f0f6;
    box-sizing: border-box;
    border-radius: 50px;
    .text {
      margin-right: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 220px;
      margin-left: 55px;
      line-height: 110px;
      margin-top: 5px;
      .count {
        font-size: 60px;
        margin: 0 20px;
        width: 80px;
        font-weight: 700;
      }
    }
    .btn {
      padding-right: 20px;
      .up {
        width: 30px;
        padding: 18px 0 0 11px;
        cursor: pointer;
      }
      .down {
        width: 30px;
        padding: 0 0 18px 11px;
        cursor: pointer;
      }
    }
  }
  .choice-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: #4876ef;
    width: 80px;
    height: 80px;
    border-radius: 40px;

    bottom: 44px;
  }
`;

const ChooseMap = styled(MapContainer)`
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 488px;
  height: 732px;
  border-radius: 32px;
  border: 1px solid #e5e5ec;
  box-sizing: border-box;
  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.12);
  a {
    display: none;
  }
`;

export default Start;
