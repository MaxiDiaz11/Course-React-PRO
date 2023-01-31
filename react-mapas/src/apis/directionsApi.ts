import axios from "axios";

const directionsApi = axios.create({
  baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
  params: {
    alternatives: true,
    geometries: "geojson",
    overview: "simplified",
    steps: false,
    access_token:
      "pk.eyJ1IjoibWF4aWRpYXoiLCJhIjoiY2xkZ2drNThyMDRvcDNwbnZoczBiczdmeSJ9.QoVIYOPI6FNQRuztrs5MRw",
  },
});

export default directionsApi;
