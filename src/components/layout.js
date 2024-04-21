import * as React from 'react'
// import { Link } from 'gatsby'
import { Helmet } from "react-helmet"
import * as styles from "./layout.module.css"
import Logo from "./Logo.js"
import Navigation from "./Navigation"


const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      {/* Site metadata */}
        <Helmet>
            <title>{pageTitle}</title>
        </Helmet>

    {/* site body. not using <body> tag, because gatsby uses it behind the scenes. using <div> for styling purposes */}
    <div className = {styles.wholeBody} >
        <header>
            <Logo />
            <Navigation />
        </header>

            {/* <nav>
            <ul >
              <li ><Link className="navItem" to="/">Pradžia</Link></li>
              <li><Link className="navItem" to="/Botaniniai">Botaniniai kvepalai</Link></li>
              <li><Link className="navItem" to="/Renginiai">Renginiai</Link></li>
              <li><Link className="navItem" to="/Krautuve">Krautuvė</Link></li>
              <li><Link className="navItem" to="/Imonems">Įmonėms</Link></li>
              <li><Link className="navItem" to="/Blogas">Blogas</Link></li>
              <li><Link className="navItem" to="/Apie">Apie</Link></li>
              <li><Link className="navItem" to="/Kontaktai">Kontaktai</Link></li>

            </ul>


          </nav> */}

          <main>
            <h1>{pageTitle}</h1>
            {children}
          </main>

          <footer> Here is the footer</footer>
      </div>

    </div>

  )
}

export default Layout