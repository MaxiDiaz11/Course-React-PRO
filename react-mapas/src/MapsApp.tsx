import { PlacesProvider } from "./context/places/PlacesProvider";
import { HomePage } from "./screens";
import "./styles.css";

const MapsApp = () => {
  return (
    <PlacesProvider>
      <HomePage></HomePage>
    </PlacesProvider>
  );
};

export default MapsApp;
