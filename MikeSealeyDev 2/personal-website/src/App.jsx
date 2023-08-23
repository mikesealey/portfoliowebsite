import './App.css'
import {Route, Routes} from "react-router-dom"

import Header from "./components/header"
import Footer from "./components/footer"
import Home from "./components/home"
import Pictures from './components/pictures'
import Woodwork from "./components/woodwork"
import FavouriteInternet from './components/favourites'
import Projects from './components/projects'
import GuessWhat from './components/projects'

function App() {
  

  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/pictures" element={<Pictures/>}></Route>
          <Route path="/woodwork" element={<Woodwork/>}></Route>
          <Route path="favourites" element={<FavouriteInternet/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/projects/guess-what"element={<GuessWhat/>}></Route>
        </Routes>
      <Footer />
    </>
  )
}

export default App
