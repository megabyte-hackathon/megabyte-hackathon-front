<<<<<<< HEAD
=======
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
              <Popup>따흐흑 회사</Popup>
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
      <HireUl></HireUl>
    </MapBody>
  );
};

const MapBody = styled.body`
  display: flex;
`;
const SelectedMap = styled(MapContainer)`
  width: 620px;
  height: 413px;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 32px;
  border: 1px solid #e5e5ec;
  box-sizing: border-box;
  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.12); ;
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
  top: 35%;
  left: calc(50% + 495px);
  transform: translate(-50%, -50%);
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
  background-color: red;
  height: 100px;
  width: 100px;
`;

export default NearHome;
>>>>>>> f77baf50be4b6b1d8aaa9d7e4faaa548a21a74c1
