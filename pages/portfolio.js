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
                <div>
                    <h1 className={styles.title}>Portfolio</h1>
                    <p className={styles.description}>I build projects to help strengthen my knowledge and skills in Ruby, JavaScript and other technologies.</p>
                </div>
                <div>
                    <h2>Current Project</h2>
                </div>
                <div>
                    <div>
                        <h3>Apex Link</h3>
                    </div>
                    <div>
                        <h3>Bundl</h3>
                    </div>
                    <div>
                        Project 3
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Portfolio;