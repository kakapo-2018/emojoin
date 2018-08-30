import React from 'react'
//import App from './components/App'
import Emoji from './Emoji.jsx'

const EmojiList = [
    {
      name: 'Aubergine',
      description: 'purple',
      image: '/images/aubergine.svg'
    },
    {
      name: 'Laughing',
      description: 'yellow',
      image: '/images/laughing.svg'
    },
    {
      name: 'Nail-Polish',
      description: 'hands',
      image: '/images/nail-polish.svg'
    },
    {
      name: 'Pig',
      description: 'pink',
      image: '/images/Pig.svg'
    },
    {
      name: 'Planet-Earth',
      description: 'round',
      image: '/images/planet-earth.svg'
    },
    {
      name: 'Taco',
      description: 'yum',
      image: '/images/taco.svg'
    }
  ]

function emojiList(Emoji) {
    return (
      Emoji.map(oneEmoji => {
          console.log(oneEmoji)
          return (
            <Emoji key={oneEmoji.name}
              name={oneEmoji.name}
              description={oneEmoji.description}
              image={oneEmoji.image}
            />
          )
      })
    )
  }

  export default EmojiList