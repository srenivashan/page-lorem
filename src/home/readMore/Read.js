import React from 'react'
import ReadPara from './ReadPara'
import './Read.css'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import logo from '../../asstes/img/shape.jpg'
import { Grid } from '@mui/material'

function read() {
    return (
      <div className='read'>
            <div className='read_container'>
              <div className='text_area'>
                <h2 className='read_head'>Selinexor KPT-330</h2>  
                <ReadPara/>
                <div className='arrow'>
                <ArrowRightIcon fontSize='large'/>
                <h4 className='arrow_read'>Read More</h4>
                </div>
                </div>
                <div>
                  <Grid item xs={3} sm={3} md={3} lg={4}>
                  <img className='logo_fly' src = {logo} alt = 'hexa_img'/>
                  </Grid>
                </div>
            </div>
        </div>
    )
}

export default read