import { useState } from "react"
import picsArray from "./picsArray"

const Pictures = () => {
    const [picsIndex, setPicsIndex] = useState(1)




    return (
        <div className="main-component">
            <h2>Pictures</h2>
            <div id="gallery">
                <div id="left-button">
                <img className="gallery-button" src={picsArray[picsIndex -1].filepath} onClick={()=>{prevImage()}}/>
                </div>
                <div id="centre">
                    <img className="gallery-image" src={picsArray[picsIndex].filepath} />
                    <caption>{picsArray[picsIndex].caption}</caption>
                </div>
                <div id="right-button">
                    <img className="gallery-button" src={picsArray[picsIndex + 1].filepath} onClick={()=>{nextImage()}}/>
                </div>
            </div>
        </div>
    )
}

export default Pictures