import PropTypes from "prop-types"
import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Header = ({href}) => (
  <Navbar sticky="top" style={{
    background: `rebeccapurple`,
    marginBottom: `1.45rem`,
  }}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: '100%',
        padding: `1.45rem 1.0875rem`,
      }}
    >
      
      <h1 style={{ margin: 0 }}>
        <Nav className="mr-auto">
          <Nav.Link href="#learning" style={{color: 'white'}}>learning</Nav.Link>
          <Nav.Link href="#working" style={{color: 'white'}}>working</Nav.Link>
          <Nav.Link href="#building" style={{color: 'white'}}>building</Nav.Link>
        </Nav>
      </h1>
      
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
