import { BtnMyLocation, MapView, ReactLogo, SearchBar } from "../components";

export const HomePage = () => {
  return (
    <div>
      <MapView />
      <BtnMyLocation></BtnMyLocation>
      <ReactLogo></ReactLogo>
      <SearchBar></SearchBar>
    </div>
  );
};
