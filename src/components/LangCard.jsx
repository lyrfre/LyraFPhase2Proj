import React from 'react'

function LangCard({ id, originalLanguage, originalWord, translatedLanguage, translatedWord }) {


  // const [isFavorite, setFavorite] = useState(false)

  // function handleFavorite() {
  //   setFavorite((isFavorite) => !isFavorite)
    return (
      <div id="wordCard">
        <li>
          <h4 id="originalWord">Original word: {originalWord} ({originalLanguage})</h4>
          <h4 id="translatedWord">Translated Word: {translatedWord} ({translatedLanguage}) </h4>
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