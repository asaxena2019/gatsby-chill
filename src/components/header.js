import PropTypes from "prop-types"
import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Header = ({href}) => (
  <Navbar sticky="top" style={{
    background: `navy`,
    marginBottom: `1.45rem`,
  }}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: '100%',
        padding: `1.45rem 1.0875rem`,
      }}
    >
        
        <Nav className="collapse navbar-nav navbar-collapse mr-auto">
          <div className="navbar navbar-expand-lg" id="navbarSupportedContent" style={{ margin: 0 }}>
            <Nav.Link href="#learning" style={{color: 'white'}}><h1>learning</h1></Nav.Link>
            <Nav.Link href="#working" style={{color: 'white'}}><h1>working</h1></Nav.Link>
            <Nav.Link href="#building" style={{color: 'white'}}><h1>building</h1></Nav.Link>
          </div>
          </Nav>
      
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
