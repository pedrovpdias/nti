import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faHome, faBox, faUsers, faBuilding } from '@fortawesome/free-solid-svg-icons'

export default function Dashboard() {
  const mainMenu = [
    {
      id: 0,
      title: 'Início',
      href: '/app/dashboard',
      icon: faHome
    },
    {
      id: 1,
      title: 'Almoxarifado',
      href: '/app/dashboard',
      icon: faBox
    },    
    {
      id: 2,
      title: 'Setores',
      href: '/app/dashboard',
      icon: faBuilding
    },
    {
      id: 3,
      title: 'Usuários',
      href: '/app/dashboard',
      icon: faUsers
    },
  ]
  
  return (
    <div className="flex min-h-screen">
      <aside className="stick flex flex-col gap-8 items-center bg-slate-200 p-8 w-60">
        <Image src="/images/next.svg" width={100} height={100} alt="Logo" className="w-32 h-auto" />

        <nav className="flex flex-col flex-1 w-full mt-10 gap-8">
          {
            mainMenu && mainMenu.map(item => (
              <Link href={item.href} className="flex border gap-4 w-full hover:scale-105 items-center group transition-all duration-200" >
                <FontAwesomeIcon icon={item.icon} height={16} width={16} className="w-fit h-auto bg-white/20 group-hover:bg-sky-500 group-hover:text-white p-2 rounded shadow" /> {item.title}
              </Link>
            ))
          }
        </nav>

        <Link href="/" className="flex gap-2 text-slate-400 text-sm hover:scale-105 hover:text-slate-500 transition-all duration-200">
          <FontAwesomeIcon icon={faArrowRightFromBracket} className="w-3 h-auto rotate-180" /> Sair
        </Link>
      </aside>
      <main>
        <h1>
          Dashboard
        </h1>
      </main>
    </div>
  );
}