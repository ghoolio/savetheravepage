import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'Save The Rave',
  description: 'Generated by create next app',
}

//every single page have the following
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    {/* <ApProvider> */}
    <html lang="en">
    
      <body className={inter.className}>
        
          {children}
        
      </body>
    </html>
    {/* </ApProvider> */}
    </ClerkProvider>
  )
}

