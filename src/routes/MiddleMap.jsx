import styled from "styled-components";
import GeoMap from "../components/GeoMap";
import TestMap from "../components/TestMap";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import { useSelector, useDispatch } from "react-redux";
import { careerActions } from "../store/career";
import { gpsActions } from "../store/gps";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useMemo } from "react";

const MiddleMap = () => {
  const navigate = useNavigate();
  const navigateTo = () => navigate("/nearhome");
  const dispatch = useDispatch();

  const gps = useSelector((state) => state.gps.gps);

  const gpsHandler = (action) => {
    dispatch(gpsActions.GPSSET(action));
  };

  // function nextPage() {}
  return (
    <StartBody>
      <ChooseMap
        center={gps}
        zoom={10}
        whenCreated={(map) => {
          map.on("click", function (e) {
            const { lat, lng } = e.latlng;
            gpsHandler([lat, lng]);
            navigateTo();
          });
        }}
      >
        <TestMap />
        <div />
      </ChooseMap>
    </StartBody>
  );
};

const StartBody = styled.body``;

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

export default MiddleMap;
