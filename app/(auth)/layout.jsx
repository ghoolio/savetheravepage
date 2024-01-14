const Layout = ({children}) => {
    return (
        <div className="flex-center min-h-screen w-full bg-black bg-dotted-pattern bg-cover bg-fixed bg-center">
            {children}
        </div>
    )
}

export default Layout