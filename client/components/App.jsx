import React from 'react'

import Venn from './Venn.jsx'
import Footer from './Footer.jsx'

//onclick function




class App extends React.Component  {
  constructor(props) {
    super(props)
    
    this.state = {
      
    }
  }
  

handleClick (e) {
  
  console.log(e.target.name)
}

  render () {
    
    return (
      
      <div className='app'>
      <h1>The App is showing</h1>
      
      <div>
      <Venn/>
      </div>
      
      
      <div>
      <Footer handleClick={this.handleClick}/>
      </div>
      
      </div>
      
    )
  }
}



export default App




