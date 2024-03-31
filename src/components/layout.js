import * as React from 'react'
import { Link } from 'gatsby'
import { Helmet } from "react-helmet"
import * as styles from "./layout.module.css"

const Layout = ({ pageTitle, children }) => {
  return (
    <div className = {`${styles.mainBackground} ${styles.layoutText}`} >
        <Helmet>
            <title>{pageTitle}</title>
        </Helmet>
        {/* <p className={styles.layoutText}>some text here</p> */}
      <nav>
        <ul >
          <li ><Link to="/">Pradzia</Link></li>
          <li><Link to="/Botaniniai">Botaniniai kvepalai</Link></li>
          <li><Link to="/Renginiai">Renginiai</Link></li>
          <li><Link to="/Krautuve">Krautuve</Link></li>
          <li><Link to="/Imonems">Imonems</Link></li>
          <li><Link to="/Blogas">Blogas</Link></li>
          <li><Link to="/Apie">Apie</Link></li>
          <li><Link to="/Kontaktai">Kontaktai</Link></li>

        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout