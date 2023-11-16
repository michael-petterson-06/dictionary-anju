import Image from "next/image";
import bookSvg from './images/book.svg';

export default function NavBar() {

  return (

    <header className="h-28 flex items-center">
      <Image
         src={ bookSvg }
         width='1000'
         height='1000'
         alt='book svg'
         className='w-10'
      />
    </header>
  )

}