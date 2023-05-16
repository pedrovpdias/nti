import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-solid-svg-icons'

import Title from "@/components/Title";
import Sidebar from "@/components/Sidebar";

export default function Dashboard() {
  
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="p-8">
        <Title title="Dashboard" />

        <div className="border"></div>
      </main>
    </div>
  );
}