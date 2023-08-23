import SubmitForm from "./submit_form"

const FavouriteInternet = () => {

    return (
        <div>
            <h4>My favourite bits of internet</h4>
            <ol>
                <li><a href="https://www.youtube.com/watch?v=AbSehcT19u0">Hal fixing a lightbulb - AKA an apt metaphor for both parenthood and technical debt</a> </li>
                <li><a href="https://www.codenewbie.org/podcast" target="_blank">CodeNewbie Podcast</a> </li>
                <li><a href="https://i.imgur.com/RadSf.jpg" target="_blank"> How to draw an owl - or what incomplete documentation feels like...</a></li>
                <li><a href="https://samwho.dev/load-balancing/" target="_blank" >Load Balancing, explained</a></li>
                <li><a href="https://jsisweird.com/" target="_blank">JavaScript is Wierd - A quiz exploring the strange quirks of the language</a> </li>
                <li><a href="spacejam.com/1996" target="_blank">Space Jam (movie) website, untouched since 1996</a></li>
                <li><a href="https://www.youtube.com/watch?v=uRGljemfwUE" target="_blank">The Website is Down...</a> </li>
            </ol>
            Missing something?
            <SubmitForm/>
        </div>
    )
}

export default FavouriteInternet