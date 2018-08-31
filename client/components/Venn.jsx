import React from 'react'
const Venn = (props) => {
  return (
    <React.Fragment>
    <div className='venndiagram'>   
      
        
        
        {props.image[0] &&<img src={ `images/${props.image[0]}.svg`} />}
        {props.image[1] &&<img src={`images/${props.image[1]}.svg` }/>}
       
    </div>
        <h1>{props.name} &nbsp;</h1>
        </React.Fragment>
  )
}
export default Venn