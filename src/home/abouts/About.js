import React from 'react'
import './About.css'
import Youtube from './Youtube'

function About() {
  return (
    <React.Fragment>
        <div className='about_container'>
            <div className='about_first'>
            <h3 className='about'>About</h3><br/>
            <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus<br/>
                ac odio convallis, aliquet sem sit amet, ullamcorper arcu.<br/>
                Vestibulum bibendum felis eu nunc venenatis tincidunt. Proin in<br/>
                magna convallis, mollis nulla id, ullamcorper massa
            </strong>
            <Youtube/>
            </div>
            <div className='about_second'>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac odio<br/>
            convallis, aliquet sem sit amet, ullamcorper arcu. Vestibulum bibendum felis<br/>
            eu nunc venenatis tincidunt. Proin in magna convallis, mollis nulla id,<br/>
            ullamcorper massa.<br/>
            Proin a dapibus ligula. In lobortis vestibulum semper. Quisque et nibh<br/>
            lobortis, lacinia massa eget, interdum turpis. Quisque fringilla quam id luctus<br/><br/>
            fringilla. Proin volutpat, dui non porta volutpat, nunc sem aliquam diam,<br/>
            cursus iaculis erat felis semper arcu. Maecenas ac lacus sed neque molestie<br/>
            scelerisque sit amet ut lectus. Nunc vel pellentesque dui. Praesent at massa<br/>
            non augue viverra molestie. Quisque feugiat ipsum sit amet elit auctor, eget<br/>
            interdum risus porttitor.<br/><br/>
            Maecenas commodo tortor euismod vulputate rutrum. Quisque auctor<br/>
            dignissim euismod. Phasellus porta tellus orci, ac tincidunt purus iaculis sed.<br/>
            </p>
            </div>
        </div>
    </React.Fragment>
  )
}

export default About