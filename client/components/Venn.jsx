import React from 'react'


const Venn = (props) => {
  return (
 
    <div className='venndiagram'>   
      
        
        
        {props.image[0] &&<img src={ `images/${props.image[0]}.svg`} />}
        {props.image[1] &&<img src={`images/${props.image[1]}.svg` }/>}
        <h1>{props.name}</h1>
       
    </div>
  )
}

export default Venn