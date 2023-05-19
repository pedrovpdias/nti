import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ModuleButton({ module }) {
  
  return (
    <Link 
      href={module.href}
      className="grid place-content-start justify-center gap-2 hover:scale-105 transition-all duration-200 text-md text-center w-32 h-28 font-semibold group-hover:[&:hover>svg]:text-white group-hover:[&:nth-of-type(1):hover>svg]:bg-sky-500 group-hover:[&:nth-of-type(2):hover>svg]:bg-indigo-500 "
      key={module.id}
    >    
      <FontAwesomeIcon 
        icon={module.icon} 
        width={60} height={60} 
        className="m-auto bg-white/30 dark:bg-white/5 shadow p-4 backdrop-blur-3xl rounded-xl transition-all duration-200" 
      />

      {module.title}
    </Link>
  );
}