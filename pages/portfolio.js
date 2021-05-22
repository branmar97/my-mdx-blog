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
                    <h1>Portfolio</h1>
                    <small>I build projects to help strengthen my knowledge and skills in Ruby, JavaScript and other technologies.</small>
                </div>
                <div>
                    <div>
                        Project 1
                    </div>
                    <div>
                        Project 2
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