/* eslint import/no-webpack-loader-syntax: off */
import React from "react";
import ReactDOM from "react-dom/client";
import MapsApp from "./MapsApp";
// @ts-ignore
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWF4aWRpYXoiLCJhIjoiY2xkZ2drNThyMDRvcDNwbnZoczBiczdmeSJ9.QoVIYOPI6FNQRuztrs5MRw";

if (!navigator.geolocation) {
  alert("Tu navegador no tiene opción de Geolocation");
  throw new Error("Tu navegador no tiene opción de Geolocation");
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
