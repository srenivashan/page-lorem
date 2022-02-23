import React from 'react'
import EventPara from './EventPara'
import './Event.css'

function Events() {
    const count = [0,1]

    return (
      <div className='event'>
            <div className='event_container'>
                <h2 className='event_head'>Events</h2>  
                <div className='eventpara'> 
                {count.map((i)=>{
                return <EventPara id= {i}/>
            })}
                </div>
            </div>
        </div>
    )
}

export default Events