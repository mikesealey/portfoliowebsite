import { Link } from "react-router-dom"

const Header = () => {

    return (
        <>
            <h1>Mike Sealey, Developer</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/projects">Coding Projects</Link>
                <Link to="/charity">Charity Work</Link>
                <Link to="/woodwork">Woodwork</Link>
                <Link to="/pictures">Pictures</Link>
                <Link to="/favourites">Favourites</Link>
            </nav>
        </>
    )
}

export default Header