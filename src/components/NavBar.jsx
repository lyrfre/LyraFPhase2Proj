import { NavLink, Link, Outlet } from "react-router-dom"
function NavLayout() {
  return (
    <div>
      <header>
        <nav>
          <h1>Translator</h1>
          <div className="navBarLinks">
            <NavLink to="/" className="navBarLink" >Home</NavLink>
            <Link to="/langForm" className="navBarLink" >Language Form</Link>
            <Link to="/favorites" className="navBarLink" >Favorite Words</Link>
            <Link to="/wordspage" className="navBarLink" >Translated Words</Link>
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
