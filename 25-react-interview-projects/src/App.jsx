import { useState } from 'react'
import Accordion from './components/accordion'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'
import './index.css'

function App() {

  return (
    <>
      {/* Accordion component */}
      <Accordion />
      {/* Random Color component */}
      <RandomColor />
      {/* Star Rating component */}
      <StarRating noOfStars={10}/>
    </>
  )
}

export default App
