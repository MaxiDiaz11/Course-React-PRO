import axios from "axios";

const searchAPi = axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
  params: {
    limit: 5,
    language: "es",
    access_token:
      "pk.eyJ1IjoibWF4aWRpYXoiLCJhIjoiY2xkZ2drNThyMDRvcDNwbnZoczBiczdmeSJ9.QoVIYOPI6FNQRuztrs5MRw",
  },
});

export default searchAPi;
