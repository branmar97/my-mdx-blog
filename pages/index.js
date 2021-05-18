import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { promises as fs } from 'fs'
import path from 'path'
import grayMatter from 'gray-matter'
import { SocialIcon } from 'react-social-icons'
import styles from '../styles/Home.module.css'
import { fileURLToPath } from 'url'

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
          Hello, I'm <a href="#">Brandon!</a>
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>Software Engineer</code>
          <code className={styles.code}>Content Creator</code>
        </p>

        <Image className={styles.portrait} src="/pic.jpeg" alt="Portrait Photo" width={250} height={250} />

        <div className={styles.icons}>
          <SocialIcon url="https://github.com/branmar97" bgColor="#0070f3" className={styles.icon} />
          <SocialIcon url="https://www.linkedin.com/in/brandon-mar" bgColor="#0070f3" className={styles.icon} />
          <SocialIcon url="https://twitter.com/branmar97" bgColor="#0070f3" className={styles.icon} />
        </div>

        <div className={styles.grid}>
          {posts.map(post => {
            return (
              <Link key={post.path} href={post.path}>
                <a className={styles.card}>
                  <h2>{post.title}</h2>
                  <p>{post.summary}</p>
                </a>
              </Link>
            )
          })}
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'pages/blog');
  const filenames = await fs.readdir(postsDirectory);

  const files = await Promise.all(filenames.map(async filename => {
    const filePath = path.join(postsDirectory, filename)
    const content = await fs.readFile(filePath, 'utf8')
    const matter = grayMatter(content)
    return {
      filename, 
      matter
    }
  }))

  const posts = files.map(file => {
    return {
      path: `/blog/${file.filename.replace('.mdx', '')}`,
      title: file.matter.data.title,
      summary: file.matter.data.description
    }
  })

  return {
    props: {
      posts
    }
  }
}