import { createContext } from "react";
import { Feature } from "../../interfaces/places";

export interface PlacesContextProps {
  isLoading: boolean;
  isLoadingPlaces: boolean;
  places: Feature[];
  searchPlacesByTerm: (query: string) => Promise<Feature[]>;
  userLocation?: [number, number];
}

export const PlacesContext = createContext<PlacesContextProps>(
  {} as PlacesContextProps
);
