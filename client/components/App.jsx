import React from 'react'

import Venn from './Venn.jsx'
import Footer from './Footer.jsx'
import data from  './data.js'

//onclick function




class App extends React.Component  {
  constructor(props) {
    super(props)
    
    this.state = {
      name : '',
      image : []
      
    }
    this.handleClick = this.handleClick.bind(this)
    this.reset = this.reset.bind(this)
    

  }
  

reset () {
  this.setState({
    name : '',
    image : []
    
  })
}

handleClick (e) {
  let clickedName = e.target.name
    
  console.log(e.target.name)
  console.log(data)

  if (this.state.image.length <2){
      let currentState = {image: [...this.state.image, clickedName]}
      console.log(currentState)
      if (currentState.image.length == 2) {
          currentState.name = data[currentState.image[0]][currentState.image[1]]
          console.log('currentState')
        }
    this.setState(currentState)
  }
  

}


  render () {
    
    return (
     

      <div className='app'>
  
      <img src='images/title.svg'/>
      
      
      <div>
      <Venn name={this.state.name} image={this.state.image}/>
      </div>
      
      
      <div>
      <Footer handleClick={this.handleClick}/>
      </div>
      
      <button onClick= {this.reset}>reset</button>
      </div>
      
    )
  }
}



export default App




