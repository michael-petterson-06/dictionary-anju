'use client'

import Image from "next/image";
import bookSvg from './images/book.svg';
import { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'
import { GoMoon, GoSun } from "react-icons/go";
import { useTheme } from "next-themes"; 


function MyToggle({themeMode, setThemeMode}:{ themeMode?: string, setThemeMode:() => void }) {
 
  return (
    
    <Switch
      checked={themeMode === 'dark' ? true : false}
      onChange={setThemeMode}
      className={`${
        themeMode === 'dark' ? 'bg-blue-600' : 'bg-gray-200'
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          themeMode === 'dark' ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  )
}

export default function NavBar() {

  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true)
  },[]) 

  if(!mounted) return null

  function changeEnabledStatus() {

    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  console.log(theme)
  return (

    <header className="h-28 flex items-center place-content-between">
      <Image
         src={ bookSvg }
         width='1000'
         height='1000'
         alt='book svg'
         className='w-10'
      />
   
      <div className="flex items-center gap-x-2">
   
        
        <MyToggle themeMode={theme} setThemeMode={changeEnabledStatus} />
        
        {theme === 'dark' ? <GoMoon className='text-3xl text-gray-400' /> : <GoSun className='text-3xl text-gray-400'/> }

      </div>
    </header>
  )

}