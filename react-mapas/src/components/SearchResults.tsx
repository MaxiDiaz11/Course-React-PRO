import { useContext, useState } from "react";
import { PlacesContext, MapContext } from "../context";
import { IsLoadingPlaces } from "./";
import { Feature } from "../interfaces/places";

export const SearchResults = () => {
  const { places, isLoadingPlaces, userLocation } = useContext(PlacesContext);
  const { map, getRouteBetweenPoints } = useContext(MapContext);
  const [activeId, setActiveId] = useState("");

  const onPlaceClick = (place: Feature) => {
    const [lng, lat] = place.center;
    map?.flyTo({
      zoom: 16,
      center: [lng, lat],
    });
    setActiveId(place.id);
  };

  const getRoute = (place: Feature) => {
    if (!userLocation) return;
    const [lng, lat] = place.center;

    getRouteBetweenPoints(userLocation, [lng, lat]);
  };

  if (isLoadingPlaces) {
    return <IsLoadingPlaces></IsLoadingPlaces>;
  }

  if (places.length === 0) {
    return <></>;
  }

  return (
    <ul className="list-group mt-3">
      {places.map((place) => (
        <li
          key={place.id}
          className={`list-group-item list-group-item-action pointer ${
            activeId === place.id ? "active" : ""
          }`}
          onClick={() => onPlaceClick(place)}
        >
          <h6>{place.text}</h6>
          <p
            style={{
              fontSize: "12px",
            }}
          >
            {place.place_name}
          </p>
          <button
            className={`btn btn-sm ${
              activeId === place.id
                ? "btn-outline-light"
                : "btn-outline-primary"
            }`}
            onClick={() => getRoute(place)}
          >
            Direcciones
          </button>
        </li>
      ))}
    </ul>
  );
};
