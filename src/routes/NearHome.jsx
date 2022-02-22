import styled from "styled-components";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import HireCompany from "../components/HireCompany";
import testgps from "../assets/testgps.json";
import companys from "../assets/companys.json";
import { useState } from "react";
import { useRef } from "react";

const NearHome = () => {
  const scrollRef = useRef();
  const [taste, setTaste] = useState("");
  function liClick(e, i) {
    scrollRef.current.scrollLeft = 260 * i;
    setTimeout(() => {
      setTaste(i);
    }, 400);
  }

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
      <div className="list" ref={scrollRef}>
        <HireUl>
          {companys.list.map((li, i) => (
            <HireCompany
              key={i}
              deadline={li.deadline}
              condition={li.condition}
              company={li.company}
              department={li.department}
              position={li.position}
              career={li.career}
              hirestate={li.hirestate}
              liClick={liClick}
              index={i}
              taste={taste}
              setTaste={setTaste}
            ></HireCompany>
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
  & > div {
    width: 100%;
    margin-top: 88px;
    position: relative;
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
