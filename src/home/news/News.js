import React from 'react'
import NewsPara from './NewsPara'
import './News.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function News() {
    const count = [0,1,2]
  return (
    <div className='news'>
          <div className='news_container'>
              <h2 className='new_head'>News</h2>
              <Carousel className='carousel'>
              {count.map((key, value) => {
                return(
                  <div className='paras'> 
                    {count.map((i)=>{
                        return <NewsPara/>
                    })}
                  </div>
                )
              })}              
            </Carousel>
          </div>
      </div>
  )
}

export default News