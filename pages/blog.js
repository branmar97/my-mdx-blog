import Head from 'next/head'
import Link from 'next/link'
import { promises as fs } from 'fs'
import path from 'path'
import grayMatter from 'gray-matter'
import readTime from '../lib/readTime';
import styles from '../styles/Blog.module.css'
import Nav from '../lib/nav'

const Blog = ({ posts }) => {
    const getMonthName = (month) => {
        const d = new Date();
        d.setMonth(month-1);
        const monthName = d.toLocaleString("default", {month: "long"});
        return monthName;
    }
    
    const formattedDate = (date) => {
        const dateChunks = date.split("/")
        const newDate = `${getMonthName(dateChunks[1])} ${dateChunks[0]}, ${dateChunks[2]}`
        return newDate
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Brandon Marrero | Blog</title>
                <meta name="description" content="Brandon Marrero Portfolio" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <main className={styles.main}>
                {Nav()}
                <div className={styles.authorInfo}>
                    <div className={styles.authorImage}>
                        <img className={styles.portrait} src="/pic.jpeg" alt="Portrait Photo" width="125" />
                    </div>
                    <div className={styles.authorDetails}>
                        <h1 className={styles.title}>Brandon Marrero</h1>
                        <p className={styles.description}>Web development, programming, technical writing, and my thoughts on the tech industry. I usually post when I want to share something new I learned.</p>
                    </div>
                </div>
                <div className={styles.cards}>
                    {posts.map(post => {
                        return (
                            <div className={styles.card} key={post.path}>
                                <Link href={post.path}><a><h2 className={styles.postTitle}>{post.title}</h2>
                                <div className={styles.postData}>
                                    <small>{formattedDate(post.date)}</small> 
                                    <small>{post.readtime} min read</small>
                                </div>
                                <div>
                                    <p className={styles.description}>{post.summary}</p>
                                </div>
                                </a></Link>
                            </div>
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

    const files = await Promise.all(filenames.reverse().map(async filename => {
        const filePath = path.join(postsDirectory, filename)
        const content = await fs.readFile(filePath, 'utf8')
        const matter = grayMatter(content)
        const timeToRead = readTime(matter.content)
        return {
        filename, 
        matter,
        timeToRead
        }
    }))

    const posts = files.map(file => {
        return {
        path: `/blog/${file.filename.replace('.mdx', '')}`,
        title: file.matter.data.title,
        summary: file.matter.data.description,
        date: file.matter.data.date,
        readtime: file.timeToRead
        }
    })

    const sortedPosts = posts.sort(function(a, b){
        let aa = a.date.split('/').reverse().join(),
            bb = b.date.split('/').reverse().join();
        return aa < bb ? -1 : (aa > bb ? 1 : 0);
    });

    return {
        props: {
        posts: sortedPosts.reverse()
        }
    }
}

export default Blog;