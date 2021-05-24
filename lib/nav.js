import Link from 'next/link'
import styles from '../styles/Nav.module.css'

export default function Nav() {
    return (
    <div className={styles.navbar}>
        <div className={styles.logo}>
            <Link href="/"><a>BEM</a></Link>
        </div>
           
        <div className={styles.nav}>
            <div className={styles.navItem}><Link href="/about"><a>About</a></Link></div>
            <div className={styles.navItem}><Link href="/portfolio"><a>Portfolio</a></Link></div>
            <div className={styles.navItem}><Link href="/blog"><a>Blog</a></Link></div>
        </div>
    </div>
    )
}