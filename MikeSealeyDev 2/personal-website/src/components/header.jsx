import { Link } from "react-router-dom"

const Header = () => {

    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/pictures">Pictures</Link>
            </nav>
        </>
    )
}

export default Header