import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox, faRotateLeft, faArrowUpFromBracket, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'

export default function Tabs() {
  const buttonTabStyle = 'flex items-center justify-center gap-2 text-sm py-2 border-b-2 border-b-transparent ';
  
  const tabs = [
    {
      id: 0,
      title: 'Estoque',
      icon: faBox,
      className: buttonTabStyle + 'active:border-b-sky-500 hover:border-b-sky-500 active:text-sky-500 hover:text-sky-500'
    },
    {
      id: 1,
      title: 'Saídas',
      icon: faArrowUpFromBracket,
      className: buttonTabStyle + 'hover:border-b-blue-500 hover:text-blue-500 active:border-b-blue-500 active:text-blue-500'
    },
    {
      id: 2,
      title: 'Entradas',
      icon: faArrowRightToBracket,
      className: buttonTabStyle + '[&>*:nth-child(2)]:rotate-90 hover:border-b-indigo-500 hover:text-indigo-500 active:border-b-indigo-500 active:text-indigo-500'
    },
    {
      id: 3,
      title: 'Devoluções',
      icon: faRotateLeft,
      className: buttonTabStyle + 'hover:border-b-violet-500 hover:text-violet-500 active:border-b-violet-500 active:text-violet-500'
    },
  ];

  return (
    <nav className="flex gap-8 ">
      {
        tabs && tabs.map(tab => (
          <button key={tab.id} className={tab.className}>
            <span className="">{tab.title}</span> <FontAwesomeIcon icon={tab.icon} className="w-3 h-3" />
          </button>
        ))
      }          
    </nav>
  )
}