import React from 'react'

function LangCard({ id, originalLanguage, originalWord, translatedLanguage, translatedWord }) {


  // const [isFavorite, setFavorite] = useState(false)

  // function handleFavorite() {
  //   setFavorite((isFavorite) => !isFavorite)
    return (
      <div>
        <li className="wordCard">
          <h4>Original Language:{originalLanguage}</h4>
          <h4>Original word: {originalWord}</h4>
          <h4>Translated Language: {translatedLanguage}</h4>
          <h4>Translated Word: {translatedWord}</h4>
          {/* <div className="details">
            {isFavorite ? (
              <button className="emoji-button favorite active" onClick={handleFavorite}>★</button>
            ) : (
              <button className="emoji-button favorite" onClick={handleFavorite}>☆</button>
            )}
          </div> */}
        </li>

      </div>
    )
  }


export default LangCard