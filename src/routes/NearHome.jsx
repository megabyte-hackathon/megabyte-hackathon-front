import styled from "styled-components";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import { useSelector, useDispatch } from "react-redux";
import { careerActions } from "../store/career";
import { useState } from "react";

import testgps from "../assets/testgps.json";

const NearHome = () => {
  return (
    <MapBody>
      <div>
        <SelectedMap center={[37.564, 127.001]} zoom={13}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="	https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
          />
          {testgps.company.map((com) => (
            <Marker
              key={com.gps[0]}
              position={com.gps}
              icon={L.divIcon({
                className: "mymarker",
                html: "🐳",
              })}
            >
              <Popup>끄흐흐 회사</Popup>
            </Marker>
          ))}
        </SelectedMap>
        <MatZip>
          <h1>!!회사이름!! 근처에</h1>
          <span>
            총 <strong>!!맛집!!</strong>개의 맛집이
            <br />
            당신을 기다리고 있어요
          </span>
          <button>보러가기</button>
        </MatZip>
      </div>
      <HireUl>
        <HireLi>
          <h2>D-20 (채용시 마감)</h2>
          <h1>(주)끄끄흐디자인</h1>
          <p>
            제트배송 영업
            <br />
            영업관리 담당자
          </p>
          <div>
            <div className="career">
              <span>경력무관</span>
              <span>정규직</span>
            </div>
            <button>보러가기</button>
          </div>
        </HireLi>
        <HireLi></HireLi>
        <HireLi></HireLi>
      </HireUl>
    </MapBody>
  );
};

const MapBody = styled.body`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  & > div {
    width: 100%;
    margin-top: 88px;
    position: relative;
  }
`;
const SelectedMap = styled(MapContainer)`
  width: 620px;
  height: 620px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 32px;
  border: 1px solid #e5e5ec;
  box-sizing: border-box;
`;
const MatZip = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  border: 1px solid #e5e5ec;
  box-sizing: border-box;
  border-radius: 16px;
  padding-left: 32px;
  position: absolute;
  width: 290px;
  height: 413px;
  left: calc(50% + 495px);
  transform: translate(-50%, 25%);
  h1 {
    color: #767676;
    font-size: 14px;
    line-height: 16px;
    margin-top: 111px;
  }
  span {
    color: #111111;
    font-size: 18px;
    line-height: 26px;
    margin-top: 16px;
    strong {
      font-size: 40px;
      line-height: 47px;
    }
  }
  button {
    color: #ffffff;
    background-color: #1d1d1d;
    width: 145px;
    height: 56px;
    border: none;
    border-radius: 62px;
    margin-top: 33px;
    font-size: 18px;
    line-height: 21px;
  }
`;
const HireUl = styled.ul`
  background-color: #f7f7fb;
  list-style: none;
  position: absolute;
  width: 100%;
  display: flex;
  height: 336px;
  margin: 0;
  padding: 0 0 0 56px;
  bottom: 0;
`;
const HireLi = styled.li`
  background-color: #ffffff;
  width: 224px;
  height: 224px;
  border: 1px solid #e5e5ec;
  border-radius: 16px;
  margin-right: 40px;
  margin-top: 36px;
  padding: 0 16px;
  h2 {
    color: #ff3636;
    font-size: 14px;
    line-height: 20px;
    margin-top: 24px;
  }
  h1 {
    color: #505050;
    font-size: 14px;
    line-height: 20px;
    margin-top: 8px;
  }
  p {
    color: #111111;
    font-size: 16px;
    line-height: 23px;
    margin-top: 4px;
  }
  div {
    margin-top: 8px;
  }
  & > div {
    border-top: 1px solid#F0F0F7;
  }
  button {
    width: 192px;
    height: 36px;
    border: 1px solid #4876ef;
    box-sizing: border-box;
    border-radius: 62px;
  }
`;

export default NearHome;
