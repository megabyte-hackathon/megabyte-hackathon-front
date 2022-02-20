import styled from "styled-components";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const NearHome = () => {
  return (
    <>
      <ChooseMap center={[36.364, 127.501]} zoom={7}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png"
        />
      </ChooseMap>
    </>
  );
};

const Main = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  div {
    margin: -20% 0 0 -50%;
    font-size: 5rem;
    font-weight: 900;
  }
`;
const ChooseMap = styled(MapContainer)`
  width: 600px;
  height: 600px;
  margin: auto;
`;

export default NearHome;
