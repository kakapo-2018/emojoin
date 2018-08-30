import React from 'react'

const Emoji = props => {
  return (
    <div className='Emoji-wrapper'>
      <div className='Emoji'>
        <div className='Emoji-name-plate'>
          <span className='Emoji-name'></span>
          <span className='Emoji-breed'></span>
        </div>
        <span className='Emoji-superpower'></span>
        <img src={props.image}></img>
      </div>
    </div>
  )
}

export default Emoji