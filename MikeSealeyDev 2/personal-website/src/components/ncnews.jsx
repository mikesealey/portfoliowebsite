
const NCnews = () => {

    return (
        <div className="main-component">
            <article className="project-article">
                <h2>NC News</h2>
                <h3>Northcoders Fullstack Solo Project</h3>
                <p>
                    NC News is a <em>news aggregation and social media</em> project. Alternatively, it's a Reddit clone. It combines a fully-tested API that queries a handful of PSQL tables for users, articles, comments, etc and populates a React frontend, allowing users to view and comment on articles, and post their own articles. 
                </p>
                <p>
                    Users can visit the topics page to see each topic available, with a short description, and then click through to a specific topic to see all articles that match that topic. They can also sort the list of articles by date, comments, or votes, in both ascending and descending order. 
                </p>
                <img className="project-image" src="/Screenshot from 2023-08-23 19-05-36.png"></img>
                <img className="project-image" src="/Screenshot from 2023-08-23 19-25-55.png"></img>
            </article>
        </div>
    )
}

export default NCnews