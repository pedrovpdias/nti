import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NTI – Núcleo de Tecnologia da Informação | IFSULDEMINAS – Campus Passos | Instituto Federal de Educação, Ciência e Tecnologia do Sul de Minas Gerais',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={inter.className} >
      <body className='bg-fixed bg-gradient-to-b from-slate-100 to-slate-300 min-h-screen text-slate-500 relative dark:from-slate-900 dark:to-slate-950 dark:text-slate-400
        before:-z-10 before:fixed before:right-8 before:bottom-0 before:w-1/2 before:h-full before:bg-gradient-radial before:from-sky-700/20 before:from-7% before:via-transparent before:to-transparent before:rounded-full
        after:-z-10 after:fixed after:-right-8 after:-bottom-96 after:w-1/2 after:h-full after:bg-gradient-radial after:from-indigo-900/20 after:from-7% after:via-transparent after:to-transparent after:rounded-full'
      >
        {children}
      </body>
    </html>
  )
}
