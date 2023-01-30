import { useContext } from "react";
import { MapContext } from "../context/map/MapContext";
import { PlacesContext } from "../context/places/PlacesContext";

export const BtnMyLocation = () => {
  const { map, isMapReady } = useContext(MapContext);
  const { userLocation } = useContext(PlacesContext);

  const OnClick = () => {
    if (!isMapReady) {
      throw new Error("Mapa no esta listo");
    }
    if (!userLocation) {
      throw new Error("No hay ubicación del usuario");
    }

    map?.flyTo({
      zoom: 14,
      center: userLocation,
    });
  };

  return (
    <button
      className="btn btn-primary"
      style={{ position: "fixed", top: "20px", right: "20PX", zIndex: 999 }}
      onClick={OnClick}
    >
      Mi ubicación
    </button>
  );
};
