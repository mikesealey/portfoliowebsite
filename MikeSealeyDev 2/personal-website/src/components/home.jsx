import Contact from "./contactme"

const Home = () => {

    return (
        <div className="main-component">

            <section>
                <h1>About Me</h1>
                <p><article>
            <div id="greeting">
                <div>
                    <h2>Hi, I'm Mike.</h2>
                    <p>
                        I am, among many things, a husband, father, woodworker, umpire, gamer, and all-round explorer. I love to try new things, and I'll give <em>(almost)</em> anything a try. I live in picturesque North Wales just a stone's throw from the Clwydian Range (AONB).
                    </p>
                    <p>
                        I'm a full-stack developer looking for early career roles in the North West, North Wales. I'm happy to commute further for hybrid roles, and I'm very open to remote-work.
                    </p>
                    <p>
                        Thank you for stopping by. Below are the broad-strokes of what you need to know about me; alternatively, please use the navigation bar above to see some more in-depth details. 
                    </p>
                </div>
                <div>
                    <img id="portrait" src={"../src/assets/NC-Mike.jpg"} alt="Mike Sealey, on graduation day from Northcoders, wearing a Northcoders hoodie"/>
                </div>
            </div>
            <p>You can get in touch by filling out the form bellow, or finding me in various corners of the internet.</p>
        <Contact/>
        <h4>Online Presence</h4>
        <ul>
            <li><a href="https://www.linkedin.com/in/mike-sealey-6439573a/" target="_blank">LinkedIn</a> </li>
            <li><a href="https://twitter.com/SealeyMike/status/1577233136357736448" target="_blank">Twitter</a> </li>
            <li><a href="https://www.instagram.com/p/BfT0nOWDmoU/?utm_source=ig_web_copy_link" target="_blank">Instagram</a></li>
            <li><a href="https://www.youtube.com/@MikeSealey_nhhc" target="_blank">YouTube</a> </li>
            <li><a href="./" target="_blank">Recursion</a></li>
            <li>mike [at] mikesealey [dot] dev</li>
        </ul>

        
    </article></p>
            </section>
        </div>
    )
}

export default Home