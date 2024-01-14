import App from "../components/shared/App"

export default function RootLayout({ children }) {
    return (

      <div className="flex h-screen flex-col">
        <App />
        <main>{children}</main>
      </div>

    )
  }