import React from 'react'
import './Home.css'
import logo from './../asstes/img/work.jpg'
import { Grid } from '@mui/material'
import HomeText from './HomeText'
import News from './news/News'
import About from './abouts/About'
import Events from './event/Events'
import Read from './readMore/Read'

function Home() {
  return (
    <React.Fragment className='home'>
        <Grid item xs={12} sm={12} md={12} lg={12}>
            <div className='home_container'>
                <div className='homelook'>
                <img className='home__image' src={logo} alt='HomePage_image'/>
                <div className='home__text'>
                <HomeText/>
                </div>
                </div>
                <div className='row_home'>
                    <About/>
                </div>
                <div className='row_home'>
                    <News/>
                </div>
                <div className='row_home'>
                    <Events/>
                </div>
                <div className='row_home'>
                    <Read/>
                </div>
            </div>
        </Grid>
    </React.Fragment>
  )
}

export default Home