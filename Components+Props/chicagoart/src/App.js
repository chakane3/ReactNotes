
import {Get100Artworks, GetArtworkImg, GetOne} from "./Components/DataCollection";
import ArtCard from "./Components/ArtCard";

function App() {
  return (
    <div className="App">
      <ArtCard/>
    </div>
  );
}

export default App;

/*
  <ArtCard
    artistName
    artTitle
    productionYear
    img(png?)
  />
*/