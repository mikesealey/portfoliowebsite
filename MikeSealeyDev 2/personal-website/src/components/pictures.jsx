import { useState } from "react"

const Pictures = () => {
    const [picsIndex, setPicsIndex] = useState(0)

    const picsArray = [
        {filepath: "/bowl2.jpg", caption: "caption goes here", alt: "alt-text for HTML accessibility"},
        {filepath: "/bowl3.jpg", caption: "caption goes here", alt: "more alt-text for more HTML accessibility"},
        {filepath: "/NC-Mike.jpg", caption: "caption goes here", alt: "more alt-text for more HTML accessibility"},
        {filepath: "/bowl2.jpg", caption: "caption goes here", alt: "alt-text for HTML accessibility"},
        {filepath: "/bowl3.jpg", caption: "caption goes here", alt: "more alt-text for more HTML accessibility"},
    ]

    function nextImage() {
        picsIndex === picsArray.length-1 ? setPicsIndex(0) : setPicsIndex(picsIndex + 1)
    }

    function prevImage(){
        picsIndex === 0 ? setPicsIndex(picsArray.length-1) : setPicsIndex(picsIndex - 1) 
    }

    return (
        <div className="main-component">
            <h2>Pictures</h2>
            <div id="gallery">
                <div id="left-button">
                    {picsIndex > 0 ? <img className="gallery-button" src={picsArray[picsIndex-1].filepath} onClick={()=>{prevImage()}}/> : null}
                </div>

                <div id="centre">
                    <img className="gallery-image" src={picsArray[picsIndex].filepath}/>
                    <caption>
                        {picsIndex + 1}/{picsArray.length}
                        {picsArray[picsIndex].caption}
                    </caption>
                </div>
                <div id="right-button">
                    {picsIndex >= picsArray.length-1 ? null : <img className="gallery-button" src={picsArray[picsIndex+1].filepath} onClick={()=>{nextImage()}}/>}
                </div>
            </div>
        </div>
    )
}

export default Pictures