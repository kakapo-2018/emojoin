import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
// import {HashRouter as Router, Route} from 'react-router-dom'

//component imports
import Emoji from './Emoji.jsx'
import Footer from './Footer.jsx'



const App = () => {
  return (
    <Router>
       <div className='app'>
       <h1>The App is showing</h1>

       <div>
         <Route path='/' component={Emoji} />
       </div>
      
       <div>
         <Route path='/' component={Footer} />
       </div>

      
       </div>
       </Router>
  )
}



// const App = () => (
//   <div className='container'>
//     <img className='spinner' src='images/paw.png' />
//     <Subtitle text='Canines using supercanine abilities for social good.' />
//     {dogs.map(showDog)}
//   </div>
// )



// (
//   <div>
    

   
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1">
//     <title>Hello Bulma!</title>
//     <h1>lolololololffdffdfdfffffff</h1>
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css">
//     <script defer src="https://use.fontawesome.com/releases/v5.1.0/js/all.js"></script>
  
//   <section class="section">
//     <div class="container">
//       <h1 class="title">
//         Hello World
//       </h1>
//       <p class="subtitle">
//         My first website with <strong>Bulma</strong>!
//       </p>
//     </div>
//   </section>
 

//   </div>
// )

export default App




