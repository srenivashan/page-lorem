import React from 'react'
import './Header.css'

function HeaderOptions() {
    const options = ['About', 'Sine Compounds', 'Drug Candidates', 'Technology', 'Investors', 'Publications']
  return (
    <React.Fragment>
        {options.map((option) => 
        <div className='header__option'>
            <span>{option}</span>
        </div>
        )}
    </React.Fragment>
  )
}

export default HeaderOptions