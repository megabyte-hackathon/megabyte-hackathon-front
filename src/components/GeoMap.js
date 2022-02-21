import React from "react";
import { GeoJSON } from "react-leaflet";
import geoData from "../assets/TL_SCCO_CTPRVN.json";

function GeoJson() {
  return (
    <GeoJSON
      data={geoData.features}
      style={{ fillColor: "#002626", color: "white" }}
    />
  );
}

export default GeoJson;
