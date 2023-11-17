'use client'

import { useEffect, useState } from "react";
import { SlMagnifier } from "react-icons/sl";
import DictionaryInfo from "../dictionary-info";
import { DictionaryInfo as DictionaryType } from "@/types";
import Swal from "sweetalert2";


export default function Dictionary() {

  const [word, setWord] = useState('');
  const [load, setLoad] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [meanings, setMeanings] = useState<DictionaryType[]>([]);
 
  async function  handleSearchClick() {
    
    if(inputValue.length > 0) {
      
      setWord(inputValue)

    }
    else {

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "The input is empty!",
      });

     }
  }

  
  useEffect(()=> {
    
    async function fetchData() {
      
      const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
      
      try {
        setLoad(true);
        const data = await fetch(url);
        const response = await data.json();
        setMeanings(response[0].meanings);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please, type an existing word.",
        });
        setMeanings([]);
      }
      setLoad(false);
      
    }
    
    if(word.length > 0 ) {
      fetchData()
    }

  }, [word]);

      
  return (
    <>
      <section className="relative flex items-center w-full mx-auto">
    
        <input
          className="bg-[rgba(244,244,244,1)] w-full px-5 py-6  rounded-lg font-bold outline-none dark:text-gray-900"
          onChange={(event)=> setInputValue(event.target.value)}
          placeholder="Search a worder"
        />

        <SlMagnifier
          className="absolute right-10 top-7 text-xl font-bold text-blue-600 cursor-pointer"
          onClick={() => handleSearchClick()}
        />

      </section>

      <h1 className="text-4xl my-10 font-bold">{word}</h1>
      {load && <p className="font-bold mb-5 text-xl">Loading...</p>}
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
