import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Post.module.css'

const Post = ({ children, frontMatter }) => {
    const { title, date } = frontMatter;
    
    return (
        <div className={styles.container}>
            <Head>
                <title>Brandon Marrero | {title}</title>
            </Head>

            <main className={styles.main}>
                <div className={styles.header}>
                <small>
                    <Link href="/blog">
                        <a>
                            Back to Blog
                        </a>
                    </Link>
                </small>
                <h1>{title}</h1>
                </div>
                <div className={styles.postInfo}>
                    <hr />
                    <div>
                        <div className={styles.authorInfo}>
                            <div>
                                <img className={styles.authorImage} src="/pic.jpeg" alt="Portrait Photo" width="75" />
                            </div>
                            <div>
                                <h3>Brandon Marrero</h3>
                                <p>Published on <strong>{date}</strong></p>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div> 
                
                <div className={styles.postContent}>
                    {children}
                </div>
            </main>

            
        </div>
    )
}

export default Post;