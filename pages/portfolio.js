import Head from 'next/head'

const Portfolio = () => {
    return (
        <div>
            <Head>
                <title>Brandon Marrero | Portfolio</title>
                <meta name="description" content="Brandon Marrero Portfolio" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <main>
                <div>
                    <h1>Portfolio</h1>
                    <small>Take a look at my work</small>
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