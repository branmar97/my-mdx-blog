import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
        <div className="navbar">
          <div className="logo">
            <Link href="/"><a>BEM</a></Link>
          </div>
          <div className="nav">
            <div className="nav-item"><Link href="/about"><a>About</a></Link></div>
            <div className="nav-item"><Link href="/portfolio"><a>Portfolio</a></Link></div>
            <div className="nav-item"><Link href="/blog"><a>Blog</a></Link></div>
          </div>
      </div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
