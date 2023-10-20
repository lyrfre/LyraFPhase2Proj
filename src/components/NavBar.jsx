import { NavLink, Link, Outlet } from "react-router-dom"
function NavLayout() {
  return (
    <div>
      <header>
        <nav>
          <h1 id="title-header">Translation App</h1>
          <div className="navBarLinks">
            <NavLink to="/" className="navBarLink" >Instructions</NavLink>
            <Link to="/langForm" className="navBarLink" >Translate Words</Link>
            <Link to="/favorites" className="navBarLink" >Favorite Words</Link>
            <Link to="/wordspage" className="navBarLink" >Translation History</Link>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
export default NavLayout;
