import React from "react"
import "../../Styles/Header/index.css"

const Header = () => {
    return( 
      <>
        <header className="header-container">
          <div className="nav-bar container">
            <h1 className="logo"><a href="/">JUST WRITE</a></h1>
            <a href="/newpub" className="btn-newpub">Novo</a>
          </div>
        </header>
      </>
    )
}

export default Header