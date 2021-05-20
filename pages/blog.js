import Head from 'next/head'
import { promises as fs } from 'fs'
import path from 'path'
import grayMatter from 'gray-matter'

const Blog = () => {
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
                    <div>
                        Post 1
                    </div>
                    <div>
                        Post 2
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Blog;