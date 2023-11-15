import Image from 'next/image'
import { useState } from 'react';
import { SlMagnifier } from "react-icons/sl";


export default function Home() {

  const [word, setWord] = useState('');
  const [inputValue, setInputValue] = useState('');

  
  return (
    <main className="px-14 mt-14">
      <section className="relative w-full mx-auto block">
  
        <input
          className="bg-[rgba(244,244,244,1)] w-full absolute px-5 py-6  rounded-lg font-bold outline-none"
          onChange={(event)=> setInputValue(event.target.value)} />
  
        <SlMagnifier
          className="absolute right-10 top-7 text-xl font-bold text-blue-600"
          onClick={() =>setWord } />
  
      </section>
    </main>
  )
}
