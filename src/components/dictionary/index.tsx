'use client'

import { useEffect, useState } from "react";
import { SlMagnifier } from "react-icons/sl";
import DictionaryInfo from "../dictionary-info";

type Definition = {

}

// type DictionaryInfo = {
//   partOfSpeech: string,
//   definitions: 
// }

export default function Dictionary() {

  const [word, setWord] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [meanings, setMeanings] = useState([]);


  // https://api.dictionaryapi.dev/api/v2/entries/en/<word>
  async function  handleSearchClick() {
    
    setWord(inputValue)
    
  }

  
  useEffect(()=> {
    
    async function fetchData() {
      
      const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
      
      try {
        const data = await fetch(url);
        const response = await data.json();
        setMeanings(response[0].meanings);
      } catch (error) {
        alert('Error')
      }
      
    }
    
    if(word.length > 0 ) {
      fetchData()
    }

  }, [word])

  


    
  return (
    <>
      <section className="relative flex items-center w-full mx-auto">
    
      <input
        className="bg-[rgba(244,244,244,1)] w-full px-5 py-6  rounded-lg font-bold outline-none"
        onChange={(event)=> setInputValue(event.target.value)}
      />

      <SlMagnifier
        className="absolute right-10 top-7 text-xl font-bold text-blue-600 cursor-pointer"
        onClick={() => handleSearchClick()}
      />

    </section>

    <h1>{word}</h1>

    {meanings && meanings.map((meaning, index) => (
      <DictionaryInfo
        key={index}
        partOfSpeech={meaning.partOfSpeech}
        definitions={meaning.definitions}
        synonyms={meaning.synonyms}
      />
    ))}

    </>
  )
}