import { Link } from "react-router-dom"

const Header = () => {

    return (
        <>
            <h1>Mike Sealey, Developer</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="projects">Projects</Link>
                <Link to="/woodwork">Woodwork</Link>
                <Link to="/pictures">Pictures</Link>
            </nav>
        </>
    )
}

export default Header