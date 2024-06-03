import React, { useState } from 'react'

const Dictionary = () => {
    const[searchValue, setSearchValue] = useState('')
    const[searchResult, setSearchResult] = useState({})
const wordList = [

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

]

const searchHandler = () =>{
    let filteredData = wordList.find(item => item.word.toLowerCase() === searchValue.toLowerCase());
    console.log(filteredData)
    if(filteredData === undefined){
        filteredData = {
            meaning:"Word not found in the dictionary."
        }
    }
    setSearchResult(filteredData)
}

  return (
    <div>
      <h1>Dictionary App</h1>
      <input type='text' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder='Search for a word..' />
      <button onClick={searchHandler}>Search</button>
      <h5>Definition:</h5>
        {searchResult && <p>{searchResult.meaning}</p>}
    </div>
  )
}

export default Dictionary
