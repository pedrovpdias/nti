import Link from "next/link"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faSearch, faFilter, faArrowDownAZ, faArrowUpAZ, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import Sidebar from "@/components/Sidebar";
import Tabs from "@/components/almoxarifado/Tabs";

export default function Almoxarifado() {
  const items = [
    {
      id: 0,
      item: 'Item Teste',
      modelo: 'Modelo Teste',
      espec: 'Especificações Teste',
      fabricante: 'Fabricante Teste',
      quantidade: 100
    },
    {
      id: 1,
      item: 'Item Teste',
      modelo: 'Modelo Teste',
      espec: 'Especificações Teste',
      fabricante: 'Fabricante Teste',
      quantidade: 100
    },
    {
      id: 2,
      item: 'Item Teste',
      modelo: 'Modelo Teste',
      espec: 'Especificações Teste',
      fabricante: 'Fabricante Teste',
      quantidade: 100
    },
    {
      id: 3,
      item: 'Item Teste',
      modelo: 'Modelo Teste',
      espec: 'Especificações Teste',
      fabricante: 'Fabricante Teste',
      quantidade: 100
    },
    {
      id: 4,
      item: 'Item Teste',
      modelo: 'Modelo Teste',
      espec: 'Especificações Teste',
      fabricante: 'Fabricante Teste',
      quantidade: 100
    },
    {
      id: 5,
      item: 'Item Teste',
      modelo: 'Modelo Teste',
      espec: 'Especificações Teste',
      fabricante: 'Fabricante Teste',
      quantidade: 100
    },
    {
      id: 6,
      item: 'Item Teste',
      modelo: 'Modelo Teste',
      espec: 'Especificações Teste',
      fabricante: 'Fabricante Teste',
      quantidade: 100
    }
    ,
    {
      id: 7,
      item: 'Item Teste',
      modelo: 'Modelo Teste',
      espec: 'Especificações Teste',
      fabricante: 'Fabricante Teste',
      quantidade: 100
    }
    ,
    {
      id: 8,
      item: 'Item Teste',
      modelo: 'Modelo Teste',
      espec: 'Especificações Teste',
      fabricante: 'Fabricante Teste',
      quantidade: 100
    }
    ,
    {
      id: 9,
      item: 'Item Teste',
      modelo: 'Modelo Teste',
      espec: 'Especificações Teste',
      fabricante: 'Fabricante Teste',
      quantidade: 100
    }
  ];


  const pagination = [
    {
      id: 'prev',
      title: <FontAwesomeIcon icon={faChevronLeft} width={12} height={12} />,
    },
    {
      id: 1,
      title: '1',
    },
    {
      id: 2,
      title: '2',
    },
    {
      id: 3,
      title: '3',
    },
    {
      id: 4,
      title: '4',
    },
    {
      id: 5,
      title: '5',
    },
    {
      id: 'next',
      title: <FontAwesomeIcon icon={faChevronRight} width={12} height={12} />
    },
  ]


  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex flex-col gap-8 p-8 w-full">
        <Title title="Almoxarifado" />

        <Tabs />

        <section className="grid gap-8">
          <Subtitle title="Estoque" />

          <div className="grid gap-2">
            <div className="flex items-center justify-end gap-2 text-xs">
              <div className="flex items-center gap-2 bg-white/30 dark:bg-white/5 p-2 rounded-sm shadow">
                <FontAwesomeIcon icon={faFilter} width={12} height={12} />
              </div>

              <div className="flex items-center gap-2 bg-white/30 dark:bg-white/5 p-2 rounded-sm shadow">
                <FontAwesomeIcon icon={faArrowDownAZ} width={12} height={12} />
              </div>

              <div className="flex items-center gap-2 bg-white/0 dark:bg-white/5 px-4 py-2 text-slate-300 dark:text-slate-600 [&:has(:focus)]:text-slate-500 dark:[&:has(:focus)]:text-slate-300 rounded-sm shadow [&:has(:focus)]:outline [&:has(:focus)]:outline-1 [&:has(:focus)]:outline-sky-200">
                <input type="text" id="search" name="search" placeholder="Pesquisar" className="bg-transparent focus:outline-none placeholder:text-slate-400/50" />
                <label htmlFor="search">
                  <FontAwesomeIcon icon={faSearch} width={12} height={12} />
                </label>
              </div>
            </div>
            
            <div className="flex justify-start gap-4 text-xs font-semibold">
              <div className="w-20 px-4 py-2">
                #
              </div>
              <div className="flex-1 px-4 py-2">
                Item
              </div>
              <div className="w-80 px-4 py-2">
                Modelo
              </div>
              <div className="w-96 px-4 py-2">
                Especificações
              </div>
              <div className="w-80 px-4 py-2">
                Fabricante
              </div>
              <div className="w-24 px-4 py-2">
                Quantidade
              </div>
              <div className="w-4"></div>
            </div>
            {
              items && items.map(item => (
                <div key={item.id} className="flex shadow rounded gap-4 bg-white/30 dark:bg-white/5 hover:text-sky-500 hover:bg-slate-300/10 text-sm">                  
                  <div className="w-20 border-r border-r-slate-500/20 p-4">
                    {item.id}
                  </div>
                  <div className="flex-1 border-r border-r-slate-500/20 p-4">
                    {item.item}
                  </div>
                  <div className="w-80 border-r border-r-slate-500/20 p-4">
                    {item.modelo}
                  </div>
                  <div className="w-96 border-r border-r-slate-500/20 p-4">
                    {item.espec}
                  </div>
                  <div className="w-80 border-r border-r-slate-500/20 p-4">
                    {item.fabricante}
                  </div>
                  <div className="w-24 p-4">
                    {item.quantidade}
                  </div>
                  <div className="grid place-content-center w-4">
                    <button className="">
                      <FontAwesomeIcon icon={faEllipsisVertical} width={16} height={16} />
                    </button>
                  </div>
                </div>
              ))
            }

            <div className="flex justify-center text-xs font-semibold bg-white/30 dark:bg-white/5 w-fit mx-auto rounded shadow">
              {
                pagination && pagination.map(page => (
                  <button className="flex items-center justify-center w-12 h-12 border-t-2 border-t-transparent hover:border-t-sky-500 hover:text-sky-500 transition-colors duration-200">
                    {page.title}
                  </button>
                ))
              }
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}