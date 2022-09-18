import React,  {userState, useEffect} from "react"
import "../Styling/ArtCard.css"




function ArtCard(props) {
    const [name, setName] = React.useState(props.name)
    console.log(props.name)
    return (
        <div className="main-card">
            <div className="artist-and-title">
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

export default ArtCard

/*
We want to have a variable (state) hold our network data for use in our ArtCards

*/




































// class ArtCard extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             imageURL: props.name
//         }
//     }
    
    
//     render() {
//         console.log(this.state.imageURL)
//         return(
//             <div className="main-card">
//                 <div className="artist-and-title">
//                     {/* <p>Theres some: {this.state.imageURL}</p> */}
//                     <div className="art-title">Still Life with Dead Game, Fruits, and Vegetables in a Market</div>
//                     <div className="artist-name">Some artist</div>
//                 </div>
//                 <div className="image-placeholder">
//                     <img></img>
//                 </div>
//                 <div className="production-year">1592</div>
//             </div>
//         )

//     }
// }