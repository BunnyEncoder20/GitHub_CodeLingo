import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
        <header>
            <h1>Code Lingo</h1>
        </header>

        <main>
            <Outlet />
        </main>

        <footer>
            <p>&copy; 2024 My Website</p>
        </footer>
    </div>
  )
}

export default Layout ;