import Link from "next/link"
import Image from "next/image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faHome, faDashboard, faBox, faUsers, faBuilding } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar() {
  const iconClassName = 'w-fit h-auto bg-white/20 group-hover:text-white p-2 rounded shadow transition-colors duration-500 ';
  
  const mainMenu = [
    {
      id: 0,
      title: 'Início',
      href: '/',
      icon: faHome,
      iconClassName: iconClassName + 'group-hover:bg-sky-500'
    },
    {
      id: 1,
      title: 'Dashboard',
      href: '/admin/dashboard',
      icon: faDashboard,
      iconClassName: iconClassName + 'group-hover:bg-blue-500'
    },
    {
      id: 2,
      title: 'Almoxarifado',
      href: '/admin/almoxarifado',
      icon: faBox,
      iconClassName: iconClassName + 'group-hover:bg-indigo-500'
    },    
    {
      id: 3,
      title: 'Setores',
      href: '/admin/dashboard',
      icon: faBuilding,
      iconClassName: iconClassName + 'group-hover:bg-violet-500'
    },
    {
      id: 4,
      title: 'Usuários',
      href: '/admin/dashboard',
      icon: faUsers,
      iconClassName: iconClassName + 'group-hover:bg-purple-500'
    },
  ]

  return (
    <aside className="stick flex flex-col gap-8 items-center bg-slate-200 py-8">
      <Image src="/images/nti.svg" width={100} height={100} alt="Logo" className="w-20 h-auto" />

      <nav className="flex flex-col flex-1 w-full mt-10 gap-4">
        {
          mainMenu && mainMenu.map(item => (
            <Link href={item.href} className="flex gap-4 w-full hover:bg-slate-500/10 items-center group transition-colors duration-200 px-8 py-2" >
              <FontAwesomeIcon icon={item.icon} height={16} width={16} className={item.iconClassName} /> {item.title}
            </Link>
          ))
        }
      </nav>

      <Link href="/" className="flex gap-2 text-slate-400 text-sm hover:scale-105 hover:text-slate-500 transition-all duration-200">
        <FontAwesomeIcon icon={faArrowRightFromBracket} className="w-3 h-auto rotate-180" /> Sair
      </Link>
    </aside>
  );
}