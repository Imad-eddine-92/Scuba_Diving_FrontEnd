import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../JS/actions/authAction'
import { useNavigate } from 'react-router-dom'
import Search from './Search'

const NavBar = () => {

  const isAuth = useSelector(state => state.authReducer.isAuth)
  const user = useSelector(state => state.authReducer.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <div>
         <Navbar style={{ backgroundColor: '#1f1f1f', paddingTop: '2px', paddingBottom: '2px' }} variant="dark" >
        <Container>
          <Navbar.Brand href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white', fontWeight:'bold', fontSize: '1.2rem' }} >

            <img src="./360_F_326114927_dmJSTdmJUm2oApof4t5F17r0g7L2Cy1g-Photoroom.png" alt="brand" width={'50px'} />
          Scuba-Diving
          </Navbar.Brand>

          <Nav style={{ marginLeft: 'auto' }}>
            <Nav.Link style={{ color: 'white' }} href="/">Home</Nav.Link>
            <Nav.Link href="/Clubs">Clubs</Nav.Link>
            {isAuth ? (
              <>
                <Nav.Link href="/profile">Profile</Nav.Link>
                <Nav.Link href="#" onClick = {() => dispatch(logout(navigate))}>Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
                
              </>
            )}
            { user.isAdmin && <Nav.Link href="/admin">Dashboard</Nav.Link> }
          </Nav>
          <Search/>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
