import React from "react";
import { GeoJSON } from "react-leaflet";
import geoData from "../assets/test.json";

function TestJson() {
  return (
    <GeoJSON
      data={geoData.features}
      style={{
        fillColor: "#b3b3b3",
        fillOpacity: 1,
        color: "white",
        weight: 0.4,
      }}
      onEachFeature={(feature, layer) => {
        layer.on("mouseover", function () {
          this.setStyle({
            fillColor: "#4876EF",
          });
        });
        layer.on("mouseout", function () {
          this.setStyle({
            fillColor: "#b3b3b3",
          });
        });
      }}
    />
  );
}

export default TestJson;
