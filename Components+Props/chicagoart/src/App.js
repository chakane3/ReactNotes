
import {Get100Artworks, GetArtworkImg, GetOne, dataRtn} from "./Components/DataCollection";
import ArtCard from "./Components/ArtCard";


function App() {
  
  return (
    <div className="App">
      <ArtCard name={dataRtn}/>
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