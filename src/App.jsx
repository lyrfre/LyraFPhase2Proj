import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"

import NavBar from "./components/NavBar"
import LangForm from "./components/LangForm"
import LangContainer from './components/LangContainer'
import LangCard from "./components/LangCard"
import Favorites from './components/Favorites'
import Home from "./components/Home"
import WordsPage from "./components/WordsPage"


const userLoader= async() => {
  const response = await fetch("/http://localhost:5173/")
  return response.json()
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route index element={<Home />} /> 
      {/* //loader={userLoader} /> */}
      {/* <Route path="/translatedText/:id" element={<LangContainer/>} loader = {translWord} /> */}
      <Route path="langForm" element={<LangForm/>} />
      <Route path="favorites" element={<Favorites />}/>
      <Route path="wordsPage"element={<WordsPage />} />
      {/* <Route path="*" element={<NotFound/>} /> */}
    </Route>
  )
)

function App() {

 
  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  )
}

export default App
