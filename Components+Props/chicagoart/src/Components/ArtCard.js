import React from "react"
import "../Styling/ArtCard.css"
class ArtCard extends React.Component {
    render() {
        return(
            <div className="main-card">
                <div className="artist-and-title">
                    <div className="art-title">Still Life with Dead Game, Fruits, and Vegetables in a Market</div>
                    <div className="artist-name">Frans Snyders</div>
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