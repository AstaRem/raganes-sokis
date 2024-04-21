import * as React from 'react'
import { Link } from 'gatsby'
import * as styles from "./navigation.module.css"

const Navigation = () => {
    return (
        <div>
            <nav >
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
                <p id={styles.navigation}>Here is the paragraph.</p>


            </nav>


        </div>

    )
}

export default Navigation