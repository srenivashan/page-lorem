import React from 'react'
import NewsPara from './NewsPara'
import './News.css';

function News() {
    const count = [0,1,2]
  return (
    <div className='news'>
          <div className='news_container'>
              <h2 className='new_head'>News</h2>  
              <div className='paras'> 
            {count.map((i)=>{
                return <NewsPara/>
            })}
            </div>
          </div>
      </div>
  )
}

export default News