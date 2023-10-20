import React, { useState, useEffect } from 'react'
import LangCard from "./LangCard"
import image from "../assets/translateLogo.svg"

function Favorites() {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])

  const [secondSelectedLang, setSecondSelectedLang] = useState("")
  const secondOptions = [
    { value: "en", label: "English" },
    { value: "fr", label: "French" },
    { value: "de", label: "German" },
    { value: "it", label: "Italian" },
    { value: "es", label: "Spanish" },
    { value: "ar", label: "Arabic" },
    { value: "ja", label: "Japanese" },
    { value: "zh", label: "Chinese" }
  ]

  //const [words, setWords] = useState ([])

  useEffect(() => {
    fetch("http://localhost:3000/words")
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  useEffect(() => {
  const result = data.filter(item => item.translatedLang === secondSelectedLang)
  setFilteredData(result);
  }, [secondSelectedLang, data])

  //console.log(result)

  // const onSearch


  return (
    <div>
      <div id="language-focus-card">
      <h2>Focus on a specific language!</h2>
      <select className="languageSelection" value={secondSelectedLang} onChange={e => setSecondSelectedLang(e.target.value)}>
        {secondOptions.map(secondOption => (
          <option key={secondOption.value} value={secondOption.value}>
            {secondOption.label}
          </option>
        ))}
      </select>
      <button><img width='20' height='20' src={image} /></button>
      </div>
      {filteredData.map(item => (
        <div key ={item.id}>
          <LangCard
          key = {item.id}
          originalLanguage= {item.originalLang}
          originalWord={item.originalWord} 
          translatedLanguage={item.translatedLang}
          translatedWord= {item.translatedWord}
          />
        </div>
      ))}
    </div>
  )
}

export default Favorites