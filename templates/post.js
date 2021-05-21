import Head from 'next/head';
import Link from 'next/link';

const Post = ({ children, frontMatter }) => {
    const { title, date } = frontMatter;
    
    return (
        <div>
            <Head>
                <title>Brandon Marrero | {title}</title>
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
                <div>
                    <hr />
                    <div>

                    </div>
                    <div>
                        <h3>Brandon Marrero</h3>
                        <small>Published on <strong>{date}</strong></small>

                    </div>
                    <hr />
                </div> 
                
                <div>
                    {children}
                </div>
            </main>

            
        </div>
    )
}

export default Post;