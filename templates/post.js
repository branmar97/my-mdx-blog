import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Post.module.css'
import Nav from '../lib/nav'

const Post = ({ children, frontMatter }) => {
    const { title, date, header } = frontMatter;
    
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
                <title>{title} | Brandon Marrero</title>
            </Head>

            <main className={styles.main}>
                {Nav()}
                <div className={styles.content}>
                    <div className={styles.header}>
                        <img src={header} alt="Post Header" />
                        <h1>{title}</h1>
                        <small>
                            <Link href="/blog">
                                <a>
                                    Back to Blog
                                </a>
                            </Link>
                        </small>
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
                                    <p>Published on <strong>{formattedDate(date)}</strong></p>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div> 
                    
                    <div className={styles.postContent}>
                        {children}
                    </div>
                </div>
            </main>

            
        </div>
    )
}

export default Post;