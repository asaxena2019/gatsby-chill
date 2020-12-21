import PropTypes from "prop-types"
import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Header = ({href}) => (
  
  <Navbar sticky="top" expand="lg" style={{
    background: `#E6E6FA`,
    marginBottom: `1.45rem`,
  }}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: '100%',
        padding: `1.45rem 1.0875rem`,
      }}
    >
  <Navbar.Toggle aria-controls="basic-navbar-nav"/>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/" style={{color: 'black'}}><h1>home</h1></Nav.Link>
      <Nav.Link href="/#learning" style={{color: 'black'}}><h1>learning</h1></Nav.Link>
      <Nav.Link href="/#working" style={{color: 'black'}}><h1>working</h1></Nav.Link>
      <Nav.Link href="/#building" style={{color: 'black'}}><h1>building</h1></Nav.Link>
      <Nav.Link href="/musing" style={{color: 'black'}}><h1>musing</h1></Nav.Link>
      <Nav.Link href="/coding" style={{color: 'black'}}><h1>coding</h1></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </div>
</Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
