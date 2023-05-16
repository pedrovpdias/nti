import Link from "next/link"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faHome, faDashboard, faBox, faUsers, faBuilding } from '@fortawesome/free-solid-svg-icons'

import Title from "@/components/Title";
import Sidebar from "@/components/Sidebar";

export default function Almoxarifado() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="p-8">
        <Title title="Almoxarifado" />
      </main>
    </div>
  );
}