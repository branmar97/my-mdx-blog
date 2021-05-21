import Head from 'next/head'
import Link from 'next/link'
import { promises as fs } from 'fs'
import path from 'path'
import grayMatter, { read } from 'gray-matter'
import readTime from '../lib/readTime';

const Blog = ({ posts }) => {
    return (
        <div >
            <Head>
                <title>Brandon Marrero | Blog</title>
                <meta name="description" content="Brandon Marrero Portfolio" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <main>
                <div>

                    <h1>Blog</h1>
                    <small>Take a look at my posts</small>
                </div>
                <div>
                    {posts.map(post => {
                        return (
                            <div key={post.path}>
                                <Link href={post.path}><a><h2>{post.title}</h2></a></Link>
                                <div>
                                    <small>{post.date}</small> 
                                    <small>{post.readtime} min read</small>
                                </div>
                                <div>
                                    <p>{post.summary}</p>
                                </div>
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

    const files = await Promise.all(filenames.map(async filename => {
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

    return {
        props: {
        posts
        }
    }
}

export default Blog;