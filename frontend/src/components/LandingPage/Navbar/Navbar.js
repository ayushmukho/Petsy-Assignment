import React from 'react'
import { FaBars } from 'react-icons/fa'
import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../../images/logo.png'
import { useState } from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import { Button } from '@material-ui/core'

import { useDispatch } from 'react-redux'
import Avatar from '@material-ui/core/Avatar'

import 'react-toastify/dist/ReactToastify.css'

import useStyles from './styles'
import { LOGOUT } from '../../../constants/actionTypes'

import SignUp from '../../authentication/SignUp/SignUp'
import SignIn from '../../authentication/SignIn/SignIn'

const Nav = styled.nav`
  background: none;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`

const NavLink = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: black;
  }
`

const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const Navbar = () => {
  const classes = useStyles()

  const dispatch = useDispatch()
  const access_token = localStorage.getItem('access_token')

  const [openSignUp, setOpenSignUp] = useState(false)
  const [openSignIn, setOpenSignIn] = useState(false)

  const handleOpen = () => {
    setOpenSignUp(true)
  }

  const handleClose = () => {
    setOpenSignUp(false)
  }

  const handleOpenSignIn = () => {
    setOpenSignIn(true)
  }

  const handleCloseSignIn = () => {
    setOpenSignIn(false)
  }

  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    dispatch({ type: LOGOUT })
    setAnchorEl(null)
  }

  return (
    <>
      <Nav position='static'>
        <NavLink to='/' className={classes.logo_name}>
          <h1 className='font-link'>Petsy</h1>
          <img src={logo} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/'>About</NavLink>
          <NavLink to='/'>Services</NavLink>
          <NavLink to='/'>Contact Us</NavLink>
        </NavMenu>
        {access_token ? (
          <div className={classes.flex}>
            {/* <h3>{authData.username}</h3> */}
            <Avatar
              src='data:image/jpeg;base64,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'
              onClick={handleClick}
            />
            <Menu
              id='simple-menu'
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
            >
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        ) : (
          <div className={classes.buttonDiv}>
            <Button onClick={handleOpen} className={classes.but}>
              Sign Up
            </Button>

            <SignUp
              openSignUp={openSignUp}
              setOpenSignUp={setOpenSignUp}
              Close={handleClose}
            />
            <Button onClick={handleOpenSignIn} className={classes.but1}>
              Sign In
            </Button>
            <SignIn
              openSignIn={openSignIn}
              setOpenSignUp={setOpenSignIn}
              closeSignIn={handleCloseSignIn}
            />
          </div>
        )}
      </Nav>
    </>
  )
}

export default Navbar
