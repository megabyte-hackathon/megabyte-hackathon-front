import styled from "styled-components";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import testgps from "../assets/testgps.json";

import { renderToStaticMarkup } from "react-dom/server";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import HireCompany from "../components/HireCompany";
import companys from "../assets/companys.json";
import { useState } from "react";
import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { careerActions } from "../store/career";
import { comApi } from "../store/Api";

const NearHome = () => {
  const gps = useSelector((state) => state.gps.gps);
  const scrollRef = useRef();
  const [taste, setTaste] = useState("");
  const [clicked, setClicked] = useState(0);
  const [comList, setComList] = useState();
  const [loading, setLoading] = useState(true);

  const area = encodeURI(useSelector((state) => state.gps.area));
  const locationInfo = useSelector((state) => state.gps.locationInfo);
  const job = encodeURI(useSelector((state) => state.career.job));
  const period = useSelector((state) => state.career.period);

  useEffect(() => {
    (async () => {
      const listCom = await comApi(area, locationInfo, job, period);
      setComList(listCom);
      setLoading(false);
      console.log(comList);
    })();
  }, []);

  function liClick(e, i) {
    scrollRef.current.scrollLeft = 260 * i;
    setTimeout(() => {
      setTaste(i);
    }, 400);
  }

  return (
    <MapBody>
      {!loading && (
        <>
          <div className="MapBody__main">
            <SelectedMap center={gps} zoom={14}>
              <TileLayer
                attribution=""
                url="	https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
              />
              {comList.announcements.map((com, index) => (
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
                              width="40"
                              height="44"
                              viewBox="0 0 40 44"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M40 20C40 26.0826 37.2847 31.531 33 35.1992C30.21 37.5878 23.5936 41.7691 21.035 43.3604C20.3979 43.7567 19.6021 43.7567 18.965 43.3604C16.4064 41.7691 9.79004 37.5878 7 35.1992C2.71535 31.531 0 26.0826 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20Z"
                                fill="#4876EF"
                              />
                              <circle cx="20" cy="20" r="16" fill="white" />
                              <circle cx="15" cy="15" r="4" fill="#4876EF" />
                              <circle cx="25" cy="15" r="4" fill="#B4C0D3" />
                              <circle cx="15" cy="25" r="4" fill="#B4C0D3" />
                              <circle cx="25" cy="25" r="4" fill="#00D3AB" />
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
              {comList.announcements.map((li, i) => (
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
        </>
      )}
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
  a {
    display: none;
  }
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
