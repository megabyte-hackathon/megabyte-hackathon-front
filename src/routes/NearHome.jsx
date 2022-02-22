import styled from "styled-components";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import testgps from "../assets/testgps.json";

import { renderToStaticMarkup } from "react-dom/server";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import HireCompany from "../components/HireCompany";
import companys from "../assets/companys.json";
import { useState } from "react";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { careerActions } from "../store/career";

const NearHome = () => {
  const gps = useSelector((state) => state.gps.gps);
  const scrollRef = useRef();
  const [taste, setTaste] = useState("");
  const [clicked, setClicked] = useState(0);
  const [star, setStar] = useState(0);
  const [heart, setHeart] = useState(0);

  function liClick(e, i) {
    scrollRef.current.scrollLeft = 260 * i;
    setTimeout(() => {
      setTaste(i);
    }, 400);
  }

  return (
    <MapBody>
      <div className="ad">
        {" "}
        <span>나만의 공고</span>를 <span>지도</span>에서 만나보세요.{" "}
      </div>
      <div className="MapBody__main">
        <SelectedMap center={gps} zoom={14}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="	https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
          />
          {companys.list.map((com, index) => (
            <Marker
              key={com.id}
              position={
                clicked === com.id
                  ? [com.latitude + 0.001, com.longitude - 0.001]
                  : [com.latitude, com.longitude]
              }
              icon={L.divIcon({
                className: "mymarker",
                html:
                  clicked === com.id
                    ? renderToStaticMarkup(
                        <svg
                          width="32"
                          height="41"
                          viewBox="0 0 32 41"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M31 16.4348C31 17.9054 30.5185 19.6772 29.6619 21.6394C28.8108 23.5892 27.6199 25.6589 26.2721 27.706C23.5766 31.8002 20.3059 35.726 18.0286 38.3059C16.9335 39.5465 15.0665 39.5465 13.9714 38.3059C11.6941 35.726 8.42344 31.8002 5.72788 27.706C4.38009 25.6589 3.18916 23.5892 2.33805 21.6394C1.48154 19.6772 1 17.9054 1 16.4348C1 7.88494 7.74083 1 16 1C24.2592 1 31 7.88494 31 16.4348Z"
                            fill="#4876EF"
                            stroke="white"
                            stroke-width="2"
                          />
                        </svg>
                      )
                    : renderToStaticMarkup(
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="8"
                            cy="8"
                            r="7"
                            fill="#4876EF"
                            stroke="white"
                            stroke-width="2"
                          />
                        </svg>
                      ),
              })}
              eventHandlers={{
                click: (e) => {
                  setClicked(com.id);
                  liClick(e, index);
                },
              }}
            >
              {/* <Popup>{com.companyName}</Popup> */}
            </Marker>
          ))}
        </SelectedMap>
      </div>
      <div className="result">
        <div
          className="heart"
          onClick={() => {
            setHeart(!heart);
          }}
        >
          {!heart ? (
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_259_1451" fill="white">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.30175 1.32274C3.03741 -0.440915 5.85148 -0.440915 7.58714 1.32274L8 1.74226L8.41286 1.32274C10.1485 -0.440915 12.9626 -0.440915 14.6983 1.32274C16.4339 3.0864 16.4339 5.94586 14.6983 7.70951L8.95206 13.5484C8.95206 13.5484 8.52581 14 8 14C7.47419 14 7.04794 13.5484 7.04794 13.5484L1.30175 7.70951C-0.433916 5.94586 -0.433916 3.0864 1.30175 1.32274Z"
                />
              </mask>
              <path
                d="M8 1.74226L7.28726 2.44369L8 3.16793L8.71274 2.44369L8 1.74226ZM8.95206 13.5484L8.23932 12.847L8.232 12.8544L8.22483 12.862L8.95206 13.5484ZM7.04794 13.5484L7.77517 12.862L7.768 12.8544L7.76068 12.847L7.04794 13.5484ZM8.29988 0.621316C6.17244 -1.54044 2.71645 -1.54044 0.589007 0.621316L2.01449 2.02417C3.35837 0.65861 5.53051 0.65861 6.8744 2.02417L8.29988 0.621316ZM8.71274 1.04083L8.29988 0.621316L6.8744 2.02417L7.28726 2.44369L8.71274 1.04083ZM7.70012 0.621316L7.28726 1.04083L8.71274 2.44369L9.1256 2.02417L7.70012 0.621316ZM15.411 0.621316C13.2836 -1.54044 9.82756 -1.54044 7.70012 0.621316L9.1256 2.02417C10.4695 0.65861 12.6416 0.65861 13.9855 2.02417L15.411 0.621316ZM15.411 8.41094C17.5297 6.25809 17.5297 2.77416 15.411 0.621316L13.9855 2.02417C15.3382 3.39864 15.3382 5.63362 13.9855 7.00809L15.411 8.41094ZM0.589007 0.621316C-1.52967 2.77416 -1.52967 6.25809 0.589007 8.41094L2.01449 7.00809C0.661837 5.63362 0.661837 3.39864 2.01449 2.02417L0.589007 0.621316ZM8 15C8.53908 15 8.97116 14.7745 9.22132 14.6106C9.35491 14.5231 9.46207 14.4363 9.53737 14.3701C9.57548 14.3366 9.60669 14.3073 9.63034 14.2843C9.6422 14.2727 9.65225 14.2627 9.66041 14.2544C9.6645 14.2502 9.66812 14.2465 9.67126 14.2432C9.67284 14.2416 9.6743 14.24 9.67563 14.2386C9.6763 14.2379 9.67694 14.2373 9.67755 14.2366C9.67786 14.2363 9.67815 14.236 9.67844 14.2357C9.67859 14.2355 9.6788 14.2353 9.67887 14.2352C9.67908 14.235 9.67929 14.2348 8.95206 13.5484C8.22483 12.862 8.22503 12.8618 8.22524 12.8616C8.2253 12.8615 8.22551 12.8613 8.22564 12.8611C8.2259 12.8609 8.22616 12.8606 8.22641 12.8603C8.22692 12.8598 8.2274 12.8593 8.22787 12.8588C8.22879 12.8578 8.22963 12.8569 8.23038 12.8562C8.23188 12.8546 8.23304 12.8534 8.23388 12.8526C8.23554 12.8509 8.23592 12.8505 8.23509 12.8513C8.23338 12.853 8.22718 12.859 8.21712 12.8678C8.19606 12.8863 8.1638 12.9124 8.1251 12.9378C8.03068 12.9997 7.98673 13 8 13V15ZM9.6648 14.2498L15.411 8.41094L13.9855 7.00809L8.23932 12.847L9.6648 14.2498ZM0.589007 8.41094L6.3352 14.2498L7.76068 12.847L2.01449 7.00809L0.589007 8.41094ZM7.04794 13.5484C6.32071 14.2348 6.32092 14.235 6.32113 14.2352C6.3212 14.2353 6.32141 14.2355 6.32156 14.2357C6.32185 14.236 6.32214 14.2363 6.32245 14.2366C6.32306 14.2373 6.3237 14.2379 6.32437 14.2386C6.3257 14.24 6.32716 14.2416 6.32874 14.2432C6.33188 14.2465 6.3355 14.2502 6.33959 14.2544C6.34775 14.2627 6.3578 14.2727 6.36966 14.2843C6.39331 14.3073 6.42452 14.3366 6.46263 14.3701C6.53793 14.4363 6.64509 14.5231 6.77868 14.6106C7.02884 14.7745 7.46092 15 8 15V13C8.01327 13 7.96932 12.9997 7.8749 12.9378C7.8362 12.9124 7.80394 12.8863 7.78288 12.8678C7.77282 12.859 7.76662 12.853 7.76491 12.8513C7.76408 12.8505 7.76446 12.8509 7.76612 12.8526C7.76696 12.8534 7.76812 12.8546 7.76962 12.8562C7.77037 12.8569 7.77121 12.8578 7.77213 12.8588C7.7726 12.8593 7.77308 12.8598 7.77359 12.8603C7.77384 12.8606 7.7741 12.8609 7.77436 12.8611C7.77449 12.8613 7.7747 12.8615 7.77476 12.8616C7.77497 12.8618 7.77517 12.862 7.04794 13.5484Z"
                fill="#B4C0D3"
                mask="url(#path-1-inside-1_259_1451)"
              />
            </svg>
          ) : (
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.30175 1.32274C3.03741 -0.440915 5.85148 -0.440915 7.58714 1.32274L8 1.74226L8.41286 1.32274C10.1485 -0.440915 12.9626 -0.440915 14.6983 1.32274C16.4339 3.0864 16.4339 5.94586 14.6983 7.70951L8.95206 13.5484C8.95206 13.5484 8.52581 14 8 14C7.47419 14 7.04794 13.5484 7.04794 13.5484L1.30175 7.70951C-0.433916 5.94586 -0.433916 3.0864 1.30175 1.32274Z"
                fill="#4876EF"
              />
            </svg>
          )}
        </div>
        <div className="occupation">IT/인터넷</div>
        <div className="job">
          <div>외환/국제금융/펀드매니저</div>
        </div>
        <div className="career">경력 3년</div>
        <div className="location">서울시 종로구</div>
      </div>
      <div className="hireinfo">
        <div
          className="star"
          onClick={() => {
            setStar(!star);
          }}
        >
          {!star ? (
            <svg
              width="20"
              height="17"
              viewBox="0 0 20 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 1L12.5392 6.19921L18.5595 6.87336L14.1086 10.7608L15.2901 16.3766L10 13.58L4.70993 16.3766L5.89144 10.7608L1.44049 6.87336L7.46077 6.19921L10 1Z"
                stroke="#B4C0D3"
                stroke-linejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="20"
              height="17"
              viewBox="0 0 20 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 1L12.5392 6.19921L18.5595 6.87336L14.1086 10.7608L15.2901 16.3766L10 13.58L4.70993 16.3766L5.89144 10.7608L1.44049 6.87336L7.46077 6.19921L10 1Z"
                fill="#FFBD70"
                stroke="#FFBD70"
                stroke-linejoin="round"
              />
            </svg>
          )}
        </div>
        <div className="deadline">D-20</div>
        <div className="company">(주)끄끄흐디자인</div>
        <div className="job">
          <div>웹개발</div>
        </div>
        <div className="career">
          <span>1년이상</span>
          <span>정규직</span>
        </div>
        <button>상세보기</button>
        <div className="grade">
          맛집<span>1</span>급수의 가게들을 하단에서 확인하세요.
        </div>
      </div>
      <div className="list" ref={scrollRef}>
        <HireUl>
          {companys.list.map((li, i) => (
            <HireCompany
              key={li.id}
              id={li.id}
              deadline={li.dueDate}
              condition={li.condition}
              company={li.companyName}
              department={li.department}
              position={li.position}
              career={li.career}
              hirestate={li.employType}
              liClick={liClick}
              setClicked={setClicked}
              index={i}
              taste={taste}
              setTaste={setTaste}
            />
          ))}
          <li className="hide">
            <div></div>
          </li>
          <li className="hide">
            <div></div>
          </li>
          <li className="hide">
            <div></div>
          </li>
          <li className="hide">
            <div></div>
          </li>
        </HireUl>
      </div>
    </MapBody>
  );
};

const MapBody = styled.body`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  height: 100%;
  .MapBody__main {
    width: 100%;
    margin-top: 189px;
    display: flex;
    justify-content: center;
  }
  .ad {
    position: absolute;
    top: 147px;
    left: 325px;
    font-weight: bold;
    font-size: 28px;
    line-height: 41px;
    color: #111;
    span {
      color: #4876ef;
    }
  }
  .list {
    position: absolute;
    bottom: 0;
    width: 100%;
    overflow: scroll;
    scroll-behavior: smooth;
  }
  .result {
    position: absolute;
    top: 189px;
    left: 1300px;
    width: 300px;
    height: 201px;
    background: #f7f7fb;
    border-radius: 16px;
    .occupation {
      margin-top: 34px;
      font-size: 18px;
      line-height: 26px;
      text-align: center;
      color: #4876ef;
    }
    .job {
      font-weight: bold;
      font-size: 18px;
      line-height: 26px;
      text-align: center;
      color: #111111;
      width: 120px;
      margin: 0 90px;
    }
    .career {
      margin: 5px 0;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      color: #767676;
    }
    .location {
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      color: #111111;
      margin-top: 10px;
    }
    .heart {
      position: absolute;
      top: 24px;
      right: 24px;
    }
  }
  .hireinfo {
    position: absolute;
    top: 405px;
    left: 1300px;
    width: 300px;
    height: 300px;
    background: linear-gradient(134.69deg, #474e5a 2.83%, #262d3d 95.84%);
    border-radius: 16px;
    .deadline {
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      color: #ff6969;
      margin-top: 32px;
      margin-bottom: 16px;
    }
    .company {
      font-size: 16px;
      line-height: 23px;
      text-align: center;
      color: #b4c0d3;
    }
    .job {
      font-weight: bold;
      font-size: 18px;
      line-height: 26px;
      color: #ffffff;
      height: 52px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .career {
      font-size: 12px;
      line-height: 17px;
      text-align: center;
      color: #b4c0d3;
    }
    .grade {
      border-top: 1px solid #44464d;
      font-size: 12px;
      line-height: 17px;
      text-align: center;
      color: #999999;
      margin: 25px 32px 0 32px;
      padding-top: 8px;
    }
    .star {
      position: absolute;
      top: 24px;
      right: 24px;
    }
    button {
      background: #4876ef;
      border-radius: 62px;
      width: 107px;
      height: 35px;
      border: none;
      font-size: 16px;
      line-height: 19px;
      color: #ffffff;
      margin-top: 12px;
      margin-left: 96px;
    }
  }
`;
const SelectedMap = styled(MapContainer)`
  width: 960px;
  height: 520px;
  position: absolute;
  top: 189px;
  left: 320px;
  border-radius: 16px;
  border: 1px solid #e5e5ec;
  box-sizing: border-box;
`;

const HireUl = styled.ul`
  list-style: none;
  display: flex;
  height: 280px;
  padding: 0 830px;
  .hide {
    div {
      width: 240px;
      height: 224px;
      margin: 0 10px;
    }
  }
`;

export default NearHome;
