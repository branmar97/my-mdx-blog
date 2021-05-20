import Head from 'next/head'
import Link from 'next/link'
import { promises as fs } from 'fs'
import path from 'path'
import grayMatter from 'gray-matter'

const Blog = ({ posts }) => {
    return (
        <div>
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
                            <div>
                                <Link key={post.path} href={post.path}><a><h2>{post.title}</h2></a></Link>
                                <p>{post.summary}</p>
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

export default Blog;