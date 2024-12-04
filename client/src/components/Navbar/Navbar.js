import React from 'react'
import PropTypes from "prop-types"
import logoImage from "./logo.jpg"
import "./Navbar.css"
function Navbar(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-info bg-gradient">
  <div className="container-fluid fs-5 text">
    <img src={logoImage}  className='logo' alt="logo" />

    <a className="navbar-brand fs-5 text" href="/">{props.title}</a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.home}
         </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-black" href="/">{props.aboutText}</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

Navbar.propTypes={
 title: PropTypes.string.isRequired,
 aboutText: PropTypes.string
}

Navbar.defaultProps={
    title:"Hello",
    aboutText:"TumKon"
}

export default Navbar