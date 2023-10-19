import React, {useState, useEffect} from 'react'
import LangContainer from './LangContainer'

function WordsPage() {

    const [words, setWords] = useState ([])

    useEffect(()=>{
      fetch("http://localhost:3000/words")
      .then(res => res.json())
      .then((wordsArray)=>{
        setWords(wordsArray)
      })
    }, [])
   console.log(typeof words)
  return (
    <div>
        <LangContainer words={words} setWords={setWords} />
    </div>
  )
}


export default WordsPage