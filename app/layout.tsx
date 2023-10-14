import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

import Navbar from "./components/navbar/Navbar"
import ClientOnly from './components/ClientOnly'
import RegisterModal from "./components/modals/RegisterModal"
import LoginModal from './components/modals/LoginModal'
import RentModal from './components/modals/RentModal'
import ToasterProvider from "./providers/ToasterProvider"
import getCurrentUser from "./actions/getCurrentUser"
import SearchModal from './components/modals/SearchModal'

export const dynamic = 'force-dynamic'

const font = Nunito({ 
  subsets: ['latin'] 
})

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

export default async function RootLayout({children}: {children: React.ReactNode}) {
  
  const currentUser = await getCurrentUser()
  
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <SearchModal />
          <RentModal />
          <Navbar currentUser={currentUser}/>
        </ClientOnly>
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  )
}
