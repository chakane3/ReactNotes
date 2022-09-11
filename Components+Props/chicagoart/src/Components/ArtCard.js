import React,  {userState, useEffect} from "react"
import "../Styling/ArtCard.css"
import {GetOne, dataRtn} from "./DataCollection"

class ArtCard extends React.Component {
    
    render() {
        let artwork;
        GetOne()
        console.log(dataRtn)
        const [data, setData] = useState(null)
        const useEffect(() => {
            const result = GetOne
        })
        return(
            <div className="main-card">
                <div className="artist-and-title">
                    <p>Theres some: {dataRtn}</p>
                    <div className="art-title">Still Life with Dead Game, Fruits, and Vegetables in a Market</div>
                    <div className="artist-name">Some artist</div>
                </div>
                <div className="image-placeholder">
                    <img></img>
                </div>
                <div className="production-year">1592</div>
            </div>
        )

    }

}

export default ArtCard