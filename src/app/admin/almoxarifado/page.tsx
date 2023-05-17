import Link from "next/link"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

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
    }
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
            {
              items && items.map(item => (
                <div key={item.id} className="flex shadow rounded p-4 bg-white/20 hover:bg-slate-500/20 hover:outline-2 hover:outline-sky-500 text-sm">
                  <div className="w-12">
                    <button className="">
                      <FontAwesomeIcon icon={faEllipsisVertical} width={16} height={16} />
                    </button>
                  </div>
                  <div className="w-20">
                    {item.id}
                  </div>
                  <div className=" flex-1">
                    {item.item}
                  </div>
                  <div className="w-80">
                    {item.modelo}
                  </div>
                  <div className="w-96">
                    {item.espec}
                  </div>
                  <div className="w-80">
                    {item.fabricante}
                  </div>
                  <div className="w-20">
                    {item.quantidade}
                  </div>
                  <div className="w-20">
                    <button className="">
                      <FontAwesomeIcon icon={faEllipsisVertical} width={16} height={16} />
                    </button>
                  </div>
                </div>
              ))
            }
          </div>
        </section>

      </main>
    </div>
  );
}