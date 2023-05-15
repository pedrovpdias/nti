import Image from 'next/image';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox, faLock, faChevronRight, faLink, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons'

import Title from '@/components/Title';

export default function Home() {
  const modulesClassName = 'm-auto bg-white/30 shadow p-4 backdrop-blur-3xl rounded-xl group-hover:text-white transition-all duration-200'
  
  const modules = [
    {
      id: 'almoxarifado-link',
      title: 'Almoxarifado',
      href: '',
      icon: faBox,
      class: modulesClassName + ' group-hover:bg-sky-400'
    },
    {
      id: 'passwords-link',
      title: 'Restaurar senha',
      href: '',
      icon: faLock,
      class: modulesClassName + ' group-hover:bg-indigo-400'
    }
  ]
  
  const systems = [
    {
      id: 0,
      title: 'AVA',
      thumbnail: '/images/system/ava.png'
    },
    {
      id: 1,
      title: 'Dreamspark',
      thumbnail: '/images/system/dreamspark.png'
    },
    {
      id: 2,
      title: 'PaperCut',
      thumbnail: '/images/system/papercut.png'
    },
    {
      id: 3,
      title: 'SiSREQ',
      thumbnail: '/images/system/sisreq.png'
    },
    {
      id: 4,
      title: 'SRA',
      thumbnail: '/images/system/sra.png'
    },
    {
      id: 5,
      title: 'SUAP',
      thumbnail: '/images/system/suap.png'
    },
  ];

  const cgtiLinks = [
    {
      id: 0,
      title: 'Portaria nº 223 - Comitê Gestor',
      href: ''
    },
    {
      id: 1,
      title: 'PUA - Política de Uso Aceitável ',
      href: ''
    },
    {
      id: 2,
      title: 'Resolução nº 76 - Aprovação da Política de Governança de TI',
      href: ''
    },
    {
      id: 3,
      title: 'Resolução nº 3 - Aprovação do PETIC',
      href: ''
    },
    {
      id: 4,
      title: 'Resolução nº 31 - Aprovação do Regimento do CGTI',
      href: ''
    },
  ]

  const contacts = [
    {
      id: 0,
      icon: faPhone,
      title: 'Telefone',
      info: <span><strong>Logística e Infraestrutura de Redes: </strong>(35) 3529-4868</span>
    },
    {
      id: 1,
      icon: faPhone,
      title: 'Telefone',
      info: <span><strong>Suporte, Serviços e Aplicações: </strong>(35) 3529-4880</span>
    },
    {
      id: 2,
      icon: faEnvelope,
      title: 'E-mail',
      info: <span>nti.passos@ifsuldeminas.edu.br</span>
    },
    {
      id: 3,
      icon: faClock,
      title: 'Horário de atendimento',
      info: <span>Seg / Sex: 07:00 às 19:00</span>
    },
  ]
  
  return (
    <div className='grid gap-8 w-full p-8'>
      <Image
        src="/images/nti.svg"
        width={100}
        height={100}
        alt='Logo'
        className='mx-auto h-auto w-32'
      />

      <section className='border-b border-b-slate-400/20'>
        <div className='flex flex-col gap-8 p-8 border-b border-b-slate-400/20'>
          <Title title="O NTI" />

          <div className='flex gap-8 items-start'>
            <div className='grid gap-8 flex-1'>
              <p className='grid gap-8 indent-3 self-center'>
                O Núcleo de Tecnologia da Informação (NTI) está subordinado à Direção Geral do Campus. É o setor responsável pela gestão, projeto e execução de serviços de Tecnologia da Informação, em atendimento às demandas provenientes da administração e ensino na unidade.
              </p>

              <Link
                href=''
                className='flex gap-2 items-center py-8 text-sm font-bold hover:text-slate-300 transition-colors duration-200 w-fit'
              >
                Veja nossas atribuições <FontAwesomeIcon icon={faChevronRight} width={12} height={12} />
              </Link>
            </div>

            <div className='flex gap-8 flex-1 items-top justify-center'>
              {
                modules && modules.map(module => (
                  <Link 
                    href={module.href}
                    className="grid place-content-start justify-center gap-2 hover:scale-105 transition-all duration-200 text-md text-center w-32 h-28 font-semibold group"
                    key={module.id}
                  >    
                    <FontAwesomeIcon 
                      icon={module.icon} 
                      width={60} height={60} 
                      className={module.class} 
                    />

                    {module.title}
                  </Link>
                ))
              }
            </div>
          </div>
        </div>

        <div className='flex gap-8 flex-col flex-1 p-8 w-fit'>
          <Title title="Sistemas" />

          <div className='flex flex-wrap gap-4 items-center justify-center'>
            {
              systems && systems.map(system => (
                <div key={system.id} className='w-24 h-24 rounded-full text-white grid place-content-center overflow-hidden transition-all duration-200 hover:scale-105 group relative'>
                  <Image
                    src={system.thumbnail}
                    width={100} height={100}
                    alt={system.title}
                    className='absolute z-0 w-full h-auto saturate-50'
                  />
                  
                  <span className='group-hover:bg-black/60 w-24 h-24 text-white invisible group-hover:visible grid place-content-center text-sm z-10 shadow transition-all duration-200'>
                    {system.title}
                  </span>
                </div>
              ))
            }
          </div>
          </div>
      </section>
      <section className='flex'>
        <div className='flex-1 flex flex-col grow gap-8 p-8'>
          <Title title="CGTI" />

          <p>
            O Comitê Gestor de Tecnologia da Informação (CGTI) do IFSULDEMINAS é um órgão colegiado de natureza propositiva e consultiva e de caráter permanente, instituído pela Portaria Nº 802 de 03 de Novembro de 2011.
          </p>

          <div className='flex flex-wrap justify-center items-start gap-8'>
            {
              cgtiLinks && cgtiLinks.map(link => (
                <Link href={link.href} className='flex flex-col items-center gap-4 w-80 h-28 text-sm font-semibold text-center p-3 hover:scale-105 transition-all duration-200 bg-white/30 shadow backdrop-blur-3xl rounded-xl' key={link.id} >
                  <FontAwesomeIcon 
                    icon={faLink} 
                    width={12} height={12} 
                    className='bg-sky-500 w-5 h-5 p-1 text-white rounded-full' 
                  />
                  {link.title}
                </Link>
              ))
            }
          </div>
        </div>
        <div className='w-fit grid p-8 gap-8 border-l border-l-slate-400/20'>
          <Title title="Contato" />

          <div className='grid grid-cols-2 p-4 gap-8 items-start justify-center'>
            {
              contacts && contacts.map(contact => (
                <div key={contact.id} className='grid gap-8 place-content-center w-72 h-80 bg-white/30 shadow p-8 backdrop-blur-3xl rounded-xl'>
                  <FontAwesomeIcon 
                    icon={contact.icon} 
                    width={56} height={56}
                    className='bg-sky-500 mx-auto p-4 rounded-xl shadow text-white' 
                  />
                  
                  <span className='font-bold text-xl text-center h-16'>
                    {contact.title}
                  </span>

                  <p className='text-sm text-center'>
                    {contact.info}
                  </p>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  )
}
