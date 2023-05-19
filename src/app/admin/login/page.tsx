import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import Title from "@/components/Title";

export default function Login() {
  return (
    <div className="grid place-content-center min-h-screen">
      <div className="bg-white/30 dark:bg-white/5 rounded-xl shadow p-8 flex flex-col gap-8">
        <Image
          src='/images/nti.svg'
          width={100}
          height={100}
          alt='Logo'
          className="w-20 mx-auto dark:invert"
        />
        <Title title="Login" />

        <form action="/admin/dashboard" className="grid gap-4 border-b border-b-slate-500/20 p-8">
          <div className="grid gap-2">
            <label htmlFor="user" className="text-xs font-semibold text-slate-400">
              Usuário
            </label>
            <div className="flex gap-4 items-center bg-white dark:bg-white/5 border border-slate-500/20 rounded py-2 px-4 text-slate-300 dark:text-slate-600 [&:has(:focus)]:text-slate-500 dark:[&:has(:focus)]:text-slate-300 [&:has(:focus)]:outline [&:has(:focus)]:outline-1 [&:has(:focus)]:outline-sky-200 transition-all duration-200">
              <FontAwesomeIcon icon={faUser} className="w-3 h-auto" />
              <input 
                type="text" name="user" id="user" 
                className="bg-transparent focus:outline-none" 
              />
            </div>
          </div>

          <div className="grid gap-2">
            <label htmlFor="password" className="text-xs font-semibold text-slate-400">
              Senha
            </label>
            <div className="flex gap-4 items-center bg-white dark:bg-white/5 border border-slate-500/20 rounded py-2 px-4 text-slate-300 dark:text-slate-600 [&:has(:focus)]:text-slate-500 dark:[&:has(:focus)]:text-slate-300 [&:has(:focus)]:outline [&:has(:focus)]:outline-1 [&:has(:focus)]:outline-sky-200 transition-all duration-200">
              <FontAwesomeIcon icon={faLock} className="w-3 h-auto" />
              <input 
                type="password" name="password" id="password"
                className="bg-transparent focus:outline-none" 
              />
            </div>
          </div>

          <button className="bg-sky-500 p-2 text-white rounded font-semibold hover:bg-sky-400 hover:scale-105 transition-all duration-200 mt-10">
            Entrar
          </button>
        </form>

        <p className="text-slate-400 text-xs">
          Área de acesso restrito apenas aos membros do Núcleo de Tecnologia da Informação &ndash; Campus Passos
        </p>

        <Link href="/" className="flex gap-2 text-slate-400 text-sm mr-0 ml-auto hover:scale-105 hover:text-slate-500 transition-all duration-200">
          <FontAwesomeIcon icon={faArrowRightFromBracket} className="w-3 h-auto rotate-180" /> Sair
        </Link>
      </div>
    </div>
  );
}