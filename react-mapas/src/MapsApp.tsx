import { PlacesProvider } from "./context/places/PlacesProvider";
import { HomePage } from "./screens";
import { MapProvider } from "./context/map/MapProvider";
import "./styles.css";

const MapsApp = () => {
  return (
    <PlacesProvider>
      <MapProvider>
        <HomePage></HomePage>
      </MapProvider>
    </PlacesProvider>
  );
};

export default MapsApp;
