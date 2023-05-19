import Image from 'next/image';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox, faLock, faChevronRight, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons'

import Title from '@/components/Title';
import ModuleButton from '@/components/ModuleButton';
import CGTILink from '@/components/CGTILink';
import ContactCard from '@/components/ContactCard';
import SystemLink from '@/components/SystemLink';

export default function Home() {
  
  const appModules = [
    {
      id: 'almoxarifado-link',
      title: 'Almoxarifado',
      href: '',
      icon: faBox,
    },
    {
      id: 'passwords-link',
      title: 'Restaurar senha',
      href: '',
      icon: faLock,
    }
  ];
  
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
  ];

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
  ];
  
  return (
    <div className='grid gap-8 w-full p-8'>
      <Image
        src="/images/nti.svg"
        width={100}
        height={100}
        alt='Logo'
        className='mx-auto h-auto w-20 dark:invert'
      />

      <section className='border-b border-b-slate-400/20'>
        <div className='flex flex-col gap-8 p-8 border-b border-b-slate-400/20'>
          <Title title="O NTI" />

          <div className='flex gap-8 items-start'>
            <div className='grid gap-8 flex-1'>
              <p className='grid gap-8 indent-3 self-center'>
                O Núcleo de Tecnologia da Informação está subordinado à Direção Geral do Campus. É o setor responsável pela gestão, projeto e execução de serviços de Tecnologia da Informação, em atendimento às demandas provenientes da administração e ensino na unidade.
              </p>

              <Link
                href=''
                className='flex gap-2 items-center py-8 text-sm font-bold hover:text-slate-300 transition-colors duration-200 w-fit'
              >
                Veja nossas atribuições <FontAwesomeIcon icon={faChevronRight} width={12} height={12} />
              </Link>
            </div>

            <div className='flex gap-8 flex-1 items-top justify-center group'>
              {
                appModules && appModules.map(module => (
                  <ModuleButton module={module} />
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
                <SystemLink system={system} />
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
                <CGTILink link={link} />
              ))
            }
          </div>
        </div>
        <div className='w-fit grid p-8 gap-8 border-l border-l-slate-400/20'>
          <Title title="Contato" />

          <div className='grid grid-cols-2 p-4 gap-8 items-start justify-center'>
            {
              contacts && contacts.map(contact => (
                <ContactCard contact={contact} />
              ))
            }
          </div>
        </div>
      </section>
    </div>
  )
}
