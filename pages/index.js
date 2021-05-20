import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'
import styles from '../styles/Home.module.css'

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Brandon Marrero | Home</title>
        <meta name="description" content="Brandon Marrero Portfolio" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello, I'm <Link href="/about"><a>Brandon!</a></Link>
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>Software Engineer</code>
          <code className={styles.code}>Content Creator</code>
        </p>

        <div className={styles.nav}>
            <div className={styles.navitem}><Link href="/about"><a>About</a></Link></div>
            <div className={styles.navitem}><Link href="/portfolio"><a>Portfolio</a></Link></div>
            <div className={styles.navitem}><Link href="/blog"><a>Blog</a></Link></div>
        </div>

        <Image className={styles.portrait} src="/pic.jpeg" alt="Portrait Photo" width={250} height={250} />

        <div className={styles.icons}>
          <SocialIcon url="https://github.com/branmar97" bgColor="#0070f3" className={styles.icon} />
          <SocialIcon url="https://www.linkedin.com/in/brandon-mar" bgColor="#0070f3" className={styles.icon} />
          <SocialIcon url="https://twitter.com/branmar97" bgColor="#0070f3" className={styles.icon} />
        </div>

      </main>
    </div>
  )
}
