import Head from 'next/head';
import Link from 'next/link';

const Post = ({ children, frontMatter }) => {
    const { title } = frontMatter;
    
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>

            <main>
                <h1>{title}</h1>
                <div>
                    {children}
                </div>
            </main>

            <p>
                <Link href="/">
                    <a>
                        Back to home
                    </a>
                </Link>
            </p>
        </div>
    )
}

export default Post;