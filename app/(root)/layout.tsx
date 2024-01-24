import Navbar from "../../components/shared/Navbar"
import Footer from "../../components/shared/Footer"

export default function RootLayout({ children }: {children: React.ReactNode}) {
    return (

      <div className="flex h-screen flex-col">
        <div className='absolute z-10 w-full'>
          {/* <Navbar /> */}
        </div>
        <main className="flex-1">{children}</main>
        {/* <Footer /> */}
      </div>

    )
  }