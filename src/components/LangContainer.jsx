// import React from 'react'
// import LangCard from "./LangCard"

// function LangContainer(words, setWords) {

//   return (
//     <div>
//       <ul className = "wordsContainer">{
//       words.map((word) => {
//         return (<LangCard
//           key = {word.id}
//           originalLanguage= {word.originalLanguage}
//           originalWord={word.originalWord} 
//           translatedLanguage={word.translatedLanguage}
//           translatedWord= {word.translatedWord}
//           words={words}
//           setWords={setWords}/>)
//        })
//     } </ul>
//     </div>
//   )
// }

// export default LangContainer


import React from 'react';
import LangCard from "./LangCard"

function LangContainer({ words, setWords }) {

  return (
    <div>
      <ul className = "wordsContainer">{
      words.map((word) => {
        return (<LangCard
          key = {word.id}
          originalLanguage= {word.originalLanguage}
          originalWord={word.originalWord} 
          translatedLanguage={word.translatedLanguage}
          translatedWord= {word.translatedWord}
          words={words}
          setWords={setWords}/>)
       })
    } </ul>
    </div>
  )
}

export default LangContainer

