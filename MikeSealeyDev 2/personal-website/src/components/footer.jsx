
const Footer = () => {
    const thisDate = new Date()


    return (
        <footer>
            <h4>© Mike Sealey, {thisDate.getFullYear()} - All opinions expressed here are my own</h4>
        </footer>
    )
}

export default Footer