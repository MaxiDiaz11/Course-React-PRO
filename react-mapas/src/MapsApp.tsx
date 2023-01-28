import { PlacesProvider } from "./context/places/PlacesProvider";

const MapsApp = () => {
  return (
    <PlacesProvider>
      <h1>Hola mundo de nuevo</h1>
    </PlacesProvider>
  );
};

export default MapsApp;
