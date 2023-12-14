import SuggestionForm from "./suggestionForm"

const FavouriteInternet = () => {

    return (
        <div className="main-component">

                <h2>My favourite bits of internet</h2>
                <ul>
                    <li><a href="https://www.youtube.com/watch?v=AbSehcT19u0" target="_blank">Hal fixing a lightbulb - AKA an apt metaphor for technical debt</a> </li>
                    <li><a href="https://www.codenewbie.org/podcast" target="_blank">CodeNewbie Podcast</a> </li>
                    <li><a href="https://i.imgur.com/RadSf.jpg" target="_blank"> How to draw an owl - or what incomplete documentation feels like...</a></li>
                    <li><a href="https://samwho.dev/load-balancing/" target="_blank" >Load Balancing, explained</a></li>
                    <li><a href="https://jsisweird.com/" target="_blank">JavaScript is Weird - A quiz exploring the strange quirks of the language</a> </li>
                    <li><a href="http://www.spacejam.com/1996" target="_blank">Space Jam (movie) website, untouched since 1996</a></li>
                    <li><a href="https://www.youtube.com/watch?v=uRGljemfwUE" target="_blank">The Website is Down...</a> </li>
                </ul>
                <h2>Favourite Books</h2>
                <ul>
                    <li>
                        <a href="https://us.macmillan.com/books/9781250183866/extremeownership" target="_blank"><b>Extreme Ownership</b></a><br/>
                        Two navy seals recall tales of their time in the toughest situations in some of the most dangerous regions of the middle-east, and discuss the leadership lessons they learned along the way with everything at stake. This book aims itself at management, but the core values that it professes can easily be applied to an individual. I listened to this as an audio-book. I didn't realise I had a preconceived notion about what a navy seal sounds like, but you will never hear two finer examples.
                    </li>
                    <li>
                        <a href="https://www.panmacmillan.com/authors/chris-hadfield/an-astronauts-guide-to-life-on-earth/9781529084788" target="_blank"><b>An Astronaut's Guide to Life on Earth</b></a><br/> Commander Chris Hadfield - first Canadian to command the ISS - discusses his desire and ambition from seeing Apollo 11 broadcast on television to becoming a test pilot, astronaut and eventual ascent to commander of the International Space Station. Hadfield discusses how he over-prepares for every situation - <em>do</em> sweat the little stuff - and only then can he relax. He covers his approach of "What is going to try to kill me next?", which might seem extreme for an average civilian, but relevant for an astronaut, but explains how this approach to discipline and preparation has served him well.
                    </li>
                </ul>
                Missing something?

            <SuggestionForm/>

        </div>
    )
}

export default FavouriteInternet