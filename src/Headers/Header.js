import React from 'react'
import logo from '../asstes/img/company.jpg'
import './Header.css'
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home'
import { Grid } from '@mui/material'

function Header() {
  return (
    <React.Fragment>
    <Grid item xs={12} sm={12} md={12} lg={12}>
    <div className='header'>
        <img className='header__logo' 
        src={logo} alt='logo'/>
        <div className='header__nav'>
            <div className='header__option'>
            <HomeIcon className='header__home'/>
            </div>
            <HeaderOptions/>
        </div>
    </div>
    </Grid>
    </React.Fragment>
  )
}

export default Header