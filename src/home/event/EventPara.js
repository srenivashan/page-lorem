import React, { useState } from 'react'
import './Event.css'

function EventPara(props) {
const head = ['Sep 9, 2014 at 1:55 PM ET', 'Sep 3, 2014']
const body = ['Curabitur sit amet mattis augue, vitae rutrum velit. Nulla sed libero ultrices, faucibus massa sit amet, sagittis felis. Praesent suscipit, mauris non pharetra efficitur, turpis.', 'Curabitur sit amet mattis augue, vitae rutrum velit. Nulla sed libero ultrices, faucibus massa sit amet, sagittis felis. Praesent suscipit, mauris non pharetra efficitur, turpis.']

  return (
    <React.Fragment>
        <div>
        <strong>{head[props.id]}</strong>
        <p>{body[props.id]}</p>
        </div>
    </React.Fragment>
  )
}

export default EventPara