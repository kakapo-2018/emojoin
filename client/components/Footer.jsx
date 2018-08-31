import React from 'react'

const Footer = (props) => {
  return (
    <div className='footer'>
      <div>
      <input onClick={props.handleClick} type='image' src='images/EggPlant.svg' class='button' name='EggPlant'/>
      </div>
      <div>
      <input onClick={props.handleClick} type='image' src='images/Laugh.svg' class='button'name='Laugh'/>
      </div>
      <div>
      <input onClick={props.handleClick} type='image' src='images/Nails.svg' class='button' name='Nails'/>
      </div>
      <div>
      <input onClick={props.handleClick} type='image' src='images/Pig.svg' class='button'name='Pig'/>
      </div>
      <div>
      <input onClick={props.handleClick} type='image' src='images/Globe.svg' class='button' name='Globe'/>
      </div>
      <div>
      <input onClick={props.handleClick} type='image' src='images/Taco.svg' class='button' name='Taco'/>
      </div>
    </div>
     
  )
}

export default Footer
