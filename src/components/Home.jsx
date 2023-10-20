//import {useLoaderData, Link} from "react-router-dom"
import React from "react"


//instructions and introduction here
function Home() {
  return (
    <div id="home-text">
      <h1>Instructions:</h1>
      <h2>To translate text:</h2>
      <p>1.Click on the "form" component link in the header</p>
      <p>2.Submit your word to be translated!</p>
      <h2>To see the words you've translated:</h2>
      <p>1.Click on the "words" component link in the header</p>
      <p>2.Look at all the words you've learned!</p>
    </div>
  )
}

export default Home