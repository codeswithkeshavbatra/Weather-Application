import React from 'react'
import './Card.css'

const Cards = ({data}) => {
    // console.log(data);
  return (
      <div className='cardContainer'> 
         {data.map((curItem,index)=>{
         if(!curItem.urlToImage){
            return null
        }else{
            return(
            <div className='card'>
                <img src={curItem.urlToImage}/>
                <div className='content'>
                    <a className='title'>{curItem.title}</a>
                    <p>{curItem.description}</p>
                    <button onClick={()=>{window.open(curItem.url)}}>Read More</button>
                </div>
            </div>
        )
        }
         
    })}
    </div>
  )
}

export default Cards
