import { PlacesState } from "./PlacesProvider";

type PlacesAction = {
  type: "setUserLocatuion";
  payload: [number, number];
};

export const placesReducer = (
  state: PlacesState,
  action: PlacesAction
): PlacesState => {
  switch (action.type) {
    case "setUserLocatuion":
      return {
        ...state,
        isLoading: false,
        userLocation: action.payload,
      };

    default:
      return state;
  }
};
