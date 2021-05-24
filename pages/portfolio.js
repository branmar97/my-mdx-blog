import Head from 'next/head'
import styles from '../styles/Portfolio.module.css'

const Portfolio = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Brandon Marrero | Portfolio</title>
                <meta name="description" content="Brandon Marrero Portfolio" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <main className={styles.main}>
            <h1 className={styles.title}>Portfolio</h1>
            <p className={styles.blurb}>I build projects to help strengthen my knowledge and skills in Ruby, JavaScript, React and other technologies.</p>
            <div>
                <div className={styles.project}>
                    <a href="https://github.com/patrick-rush/fitr-frontend"><h2 className={styles.smallTitle}>FITR</h2></a>
                    <p className={styles.subtitle}>Single-Page Web Application</p>
                    <img className={styles.portfolioImage} src="/portfolio/fitr/01-image.png" alt="FITR web design" />
                    <div className="project-details">
                        <div className="project-summary">
                            <h4>Summary</h4>
                            <p className={styles.description}>
                            Currently in its early stages, FITR is a fitness web app with a twist. Users have a profile, followers, workouts, likes, comments, groups and a workout score. Share your fitness activities in posts, images, workout logs and groups. The image above is an initial design for the project. We created this to help provide a clear understanding of the UI and what components would be needed.
                            </p>
                        </div>
                        <div className="project-tech">
                            <h4>Technologies</h4>
                            <ul>
                                <li>Ruby on Rails</li>
                                <li>ReactJS</li>
                                <li>TailwindCSS</li>
                            </ul>
                            <p className={styles.description}>
                                This projects integrates Rails in API mode, React, Redux, React Router, JEST testing, Devise for Auth, ActiveStorage for file uploads, and JSON Serializer for formatting JSON responses.
                            </p>
                        </div>
                        <div className="project-links">
                            <a href="https://github.com/patrick-rush/fitr-frontend"><button className={styles.button}>
                                View Code
                            </button></a>
                        </div>
                    </div>
                </div>
                <hr />
                <div className={styles.project}>
                <a href="https://github.com/branmar97/apexlink-frontend"><h2 className={styles.smallTitle}>Apex Link</h2></a>
                    <p className={styles.subtitle}>Single-Page Web Application</p>
                    <img className={styles.portfolioImage} src="/portfolio/apex-link/01-image.png" alt="Apex Link" />
                    <div className="project-details">
                        <div className="project-summary">
                            <h4>Summary</h4>
                            <p className={styles.description}>
                            Apex Link is a React SPA designed to connect gamers with teammates in the video game, Apex Legends. By signing up, users can create and browse game lobbies. A lobby can be filtered by host name, region, platform and gamemode. If interested, a user can make a request to join a lobby and leave a message. This system allows players to build the perfect squad.
                            </p>
                        </div>
                        <div className="project-tech">
                            <h4>Technologies</h4>
                            <ul>
                                <li>Ruby on Rails</li>
                                <li>ReactJS</li>
                                <li>TailwindCSS</li>
                            </ul>
                            <p className={styles.description}>
                                This projects integrates Rails in API mode, React, Redux, React Router, Devise for Auth, and JSON Serializer for formatting JSON responses.
                            </p>
                        </div>
                        <div className="project-links">
                            <a href="https://www.youtube.com/watch?v=iDxkqqi3Dqw&t=2s"><button className={styles.button}>
                                Demo
                            </button></a>
                            <a href="https://github.com/branmar97/apexlink-frontend"><button className={styles.button}>
                                View Code
                            </button></a>
                        </div>
                    </div>
                </div>
                <hr />
                <div className={styles.project}>
                <a href="https://github.com/branmar97/bundl-rails"><h2 className={styles.smallTitle}>Bundl</h2></a>
                    <p className={styles.subtitle}>MVC Web Application</p>
                    <img className={styles.portfolioImage} src="/portfolio/bundl/01-image.png" alt="Bundl" />
                    <div className="project-details">
                        <div className="project-summary">
                            <h4>Summary</h4>
                            <p className={styles.description}>
                            Bundl is a fullstack Ruby on Rails web app where users can create and view events. It provides a place for like-minded people to connect and build relationships. A signed up user can start a group, view events, and join discussions. Users also have the option of signing in using their Facebook account.
                            </p>
                        </div>
                        <div className="project-tech">
                            <h4>Technologies</h4>
                            <ul>
                                <li>Ruby on Rails</li>
                                <li>Bootstrap</li>
                                <li>OAuth</li>
                            </ul>
                            <p className={styles.description}>
                                This projects integrates Ruby on Rails, Devise for Auth, OAuth Facebook and Bootstrap.
                            </p>
                        </div>
                        <div className="project-links">
                            <a href="https://www.youtube.com/watch?v=pnDAT-erJuM"><button className={styles.button}>
                                Demo
                            </button></a>
                            <a href="https://github.com/branmar97/bundl-rails"><button className={styles.button}>
                                View Code
                            </button></a>
                        </div>
                    </div>
                </div>
                </div>
            </main>
        </div>
    )
}

export default Portfolio;