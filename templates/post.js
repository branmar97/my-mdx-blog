import Head from 'next/head';
import Link from 'next/link';

const Post = ({ children, frontMatter }) => {
    const { title, date } = frontMatter;
    
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>

            <main>
            <small>
                <Link href="/">
                    <a>
                        Back to home
                    </a>
                </Link>
            </small>
                <h1>{title}</h1>
                <small>{date}</small>
                <div>
                    {children}
                </div>
            </main>

            
        </div>
    )
}

export default Post;