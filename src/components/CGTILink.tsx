import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

export default function CGTILink({ link }) {
  return (
    <Link href={link.href} className='flex flex-col items-center gap-4 w-80 h-28 text-sm font-semibold text-center p-3 hover:scale-105 transition-all duration-200 bg-white/30 dark:bg-white/5 shadow backdrop-blur-3xl rounded-xl' key={link.id} >
      <FontAwesomeIcon 
        icon={faLink} 
        width={12} height={12} 
        className='bg-sky-500 w-5 h-5 p-1 text-white rounded-full' 
      />
      {link.title}
    </Link>
  );
}