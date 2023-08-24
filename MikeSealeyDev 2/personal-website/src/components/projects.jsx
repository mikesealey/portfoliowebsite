import { Link } from "react-router-dom"

const Projects = () => {

    return (
        <div>
            <h1>Projects</h1>
            <h2><Link to="/projects/guess-what">Guess What</Link></h2>
            <p>Guess What - An extra-terrestrial twist on the classic board game Guess Who</p>
            <h2><Link to="/projects/nc-news">NC News</Link></h2>
            <p>NC News - A news aggregation and social media site (AKA Reddit Clone)</p>
            <h2><Link to="/projects/nasa-api">NASA Meteorite Strikes</Link></h2>
            <p>Meteorite Strikes plotted on a React Leaflet Map</p>
            <h2><Link to="https://mikesealey.github.io/calculator/" target="_blank">Calculator</Link></h2>
            <p> Made with Vanilla JavaScript as part of the Foundations chapter of <Link to="https://www.theodinproject.com/" target="_blank"> The Odin Project</Link></p>
        </div>
    )
}

export default Projects