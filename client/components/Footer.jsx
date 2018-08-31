import React from 'react'

const Footer = (props) => {
  return (
    <div className='footer'>
      <div>
      <input onClick={props.handleClick} type='image' src='images/aubergine.svg' class='button' name='EggPlant'/>
      </div>
      <div>
      <input onClick={props.handleClick} type='image' src='images/laughing.svg' class='button'name='Laugh'/>
      </div>
      <div>
      <input onClick={props.handleClick} type='image' src='images/nail-polish.svg' class='button' name='Nails'/>
      </div>
      <div>
      <input onClick={props.handleClick} type='image' src='images/pig.svg' class='button'name='Pig'/>
      </div>
      <div>
      <input onClick={props.handleClick} type='image' src='images/planet-earth.svg' class='button' name='Globe'/>
      </div>
      <div>
      <input onClick={props.handleClick} type='image' src='images/taco.svg' class='button' name='Taco'/>
      </div>
    </div>
     
  )
}

export default Footer
