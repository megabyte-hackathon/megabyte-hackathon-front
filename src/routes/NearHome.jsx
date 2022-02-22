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

  function liClick(e, i) {
    scrollRef.current.scrollLeft = 260 * i;
    setTimeout(() => {
      setTaste(i);
    }, 400);
  }

  return (
    <MapBody>
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
  .list {
    position: absolute;
    bottom: 0;
    width: 100%;
    overflow: scroll;
    scroll-behavior: smooth;
  }
`;
const SelectedMap = styled(MapContainer)`
  width: 960px;
  height: 520px;
  position: absolute;
  border-radius: 16px;
  border: 1px solid #e5e5ec;
  box-sizing: border-box;
  margin-right: 20px;
`;
const MatZip = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  border: 1px solid #e5e5ec;
  box-sizing: border-box;
  border-radius: 16px;
  padding-left: 32px;
  width: 290px;
  height: 413px;
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
  list-style: none;
  display: flex;
  height: 336px;
  margin: 0;
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
