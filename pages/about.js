import Head from 'next/head'
import styles from '../styles/About.module.css'

const About = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Brandon Marrero | About</title>
                <meta name="description" content="Brandon Marrero Portfolio" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <main className={styles.main}>
                
                <h1 className={styles.title}>About Me</h1>
                <small className={styles.blurb}>I commit my code to <a href="https://github.com/branmar97">Github</a> and share my journey on <a href="https://www.linkedin.com/in/brandon-mar/">LinkedIn</a> and <a href="https://twitter.com/branmar97">Twitter</a>.</small>
                <div className={styles.header}>
                    <p className={styles.description}>I'm based in Newport News, Virginia. I enjoy 🤓 programming, 📖 reading, ✍️ writing, 👨‍🍳 cooking, 🕹️ playing games, and 🎥 creating video content. I 🎓 graduated from Flatiron School, a Software Engineering bootcamp where I learned how to build web applications using technologies, such as, ReactJS, Ruby on Rails, JavaScript and HTML/CSS. 🚀 Seeking an opportunity for the fulfillment of my passion for software engineering.
                    </p>
                    <img className={styles.header} src="/pic02.jpeg" alt="Family Photo" width="350" />
                </div>
                <div>
                    <div>
                        <h2>Why did you choose Software Engineering?</h2>
                        <p>
                            From tinkering with computers at age 8 to building fullstack web applications, technology has always been a passion of mine. I have always been curious about how things work in the background. If I own something, I want to have at least a basic understanding of how it works.
                        </p>
                        <p>
                            I chose Software Engineering because it allows me to fulfill that value for learning. There is simply so much to learn that I cannot learn it all, and that is one thing that makes this field exciting.
                        </p>
                    </div>
                    <div>
                        <h2>What is your approach to solving a problem with code?</h2>
                        <p>
                            I start by identifying and understanding the problem, then I create a plan to solve that problem. My plan usually consists of what I expect the output to be and how to get it. Once I have a plan, I start writing the actual code. At the end, I look back over my code to refactor and optimize my solution.
                        </p>
                    </div>
                    <div>
                        <h2>How do you approach learning a new concept or tool?</h2>
                        <p>
                            First, I consume content about the tool to learn the basics. I try not to get further than the basics, and I immediately begin applying what I learned. As my understanding solidifies, I dive deeper and use more advanced concepts. This strategy allows me to get an understanding of the fundamentals before fully immersing myself.
                        </p>

                    </div>
                </div>
            </main>
        </div>
    )
}

export default About;