import React from 'react'
import { VscStarEmpty, VscStarFull } from 'react-icons/vsc'

const Rating = ({ rating,setRating }) => {
  return (
    <>
      {[...Array(5)].map((_,i) => (
        <span key={i} onClick={()=>setRating(i+1)} style={{cursor:'pointer'}}>
          {rating > i ? <VscStarFull /> : <VscStarEmpty />}
        </span>
      ))}
    </>
  )
}

export default Rating


/// remmember