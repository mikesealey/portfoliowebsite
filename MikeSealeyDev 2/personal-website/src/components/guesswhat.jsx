
const GuessWhat = () => {

    return (
        <div className="main-component">
            <article className="project-article">
                <img className="project-image" src="/guess-what-logo.png"></img>
                <h2>Guess What</h2>
                <h3>Northcoders Fullstack Group Project</h3>
                <p className="project-links-container">
                    <div className="project-links"><b><a href="https://guess-what-gitkermit.netlify.app/" target="_blank">Link to hosted project</a></b></div>
                    <div className="project-links"><b><a href="https://github.com/jamesyuill/guess-what-fe" target="_blank">Front End Repo</a></b></div>
                    <div className="project-links"><b><a href="https://github.com/PabloJulianRial/Guess-What-Aliens-backend" target="_blank">Back End Repo</a></b></div>
                </p>
                <p>
                    My time at Northcoders culminated in a group project where we had to design and build a full-stack application of our choosing. We decided to go with a clone of the classic board-game <a href="https://en.wikipedia.org/wiki/Guess_Who%3F" target="_blank"><em>Guess Who</em></a>, but with aliens instead of humans! We picked 8 attributes that the aliens could have, and seeded the database with every possible combination of attributes, resulting in 5,860 unique alien-objects. As the gameboard loads, it fetches 24 objects randomly, and then layers PNGs ontop of each other by taking the object-values and inserting them in string-literals for the filepath of each image. The end-result is that 30-or-so images can be selected to display nearly 6,000 aliens. It also makes it very scalable; a new alien-attribute could be handled with only a few new images, but increase the size and variety of the aliens exponentially 
                </p>
                <img className="project-image" src="/Screenshot from 2023-08-23 17-09-10.png"></img>
                <caption>
                    Guess What!? Landing page - entering your name here will let your score be registered in the leaderboard (should you play well enough) or find your opponent in a two-player match
                </caption>
                <img className="project-image" src="/Screenshot from 2023-08-23 17-11-33.png"></img>
                <caption>
                    As the user makes guesses, the aliencard on the right populates with attributes of the alien that they are guessing, and the user can click to eliminate aliens that have been ruled out.
                </caption>
                <img className="project-image" src="/Screenshot from 2023-08-23 17-35-55.png"></img>
                <caption> 
                    In single-player mode, the user's time and score get posted to the leaderboard via an API post request. The leaderboard can then be sorted by score, time, or most recent entry. 
                </caption>
                <img className="project-image" src="/Screenshot from 2023-08-24 11-56-20.png"></img>
                <caption>
                    Since graduating Northcoders I wanted to keep working on completing additional features on the Guess What project. I've implemented the ability for a user to create their own alien using existing assets, and then download the image, for use as a profile picture or just for fun. I used html2canvas to achieve this, and tested in Firefox and Chrome with good results.
                </caption>
                <img className="project-image" src="/20230811_153300.jpg" alt=""></img>
                <caption>
                    Half of <em>Git Kermit</em>, the team behind building <em>Guess What</em>. Left-to-right: James Yuill, Omari Ali, Mike Sealey. <em>Git-Kermit</em> members not pictured: Matt Shehan, Pablo Rial Sartirana, Connor Kelly.
                </caption>
            </article>
        </div>
    )
}

export default GuessWhat