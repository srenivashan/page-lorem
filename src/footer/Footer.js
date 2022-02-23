import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SearchIcon from '@mui/icons-material/Search';
import WindowIcon from '@mui/icons-material/Window';
import SettingsIcon from '@mui/icons-material/Settings';
import SquareIcon from '@mui/icons-material/Square';
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
    <div className='footer_container'>
            <SquareIcon/>
            <div className='footer_info'>
                <small>2014 TheCompany Inc. | Contact Carrers</small>
            </div>
            <div className='footer_pack1'>
                <SettingsIcon/>
                <WindowIcon/>
            </div>
            <div className='footer_pack2'>
                <FacebookIcon/>
                <TwitterIcon/>
                <LinkedInIcon/>
                <SearchIcon/>
            </div>
            </div>
    </div>
  )
}

export default Footer