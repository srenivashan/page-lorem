import React from 'react'
import ReadPara from './ReadPara'
import './Read.css'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import logo from '../../asstes/img/shape.jpg'

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
                <div className='logo_fly'>
                  <img src = {logo} alt = 'hexa_img'/>
                </div>
            </div>
        </div>
    )
}

export default read