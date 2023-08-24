
const Footer = () => {
    const thisDate = new Date()


    return (
        <footer>
            <h6>© Mike Sealey, {thisDate.getFullYear()} - All opinions expressed here are my own</h6>
        </footer>
    )
}

export default Footer