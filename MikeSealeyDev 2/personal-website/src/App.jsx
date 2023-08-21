import './App.css'
import {Route, Routes} from "react-router-dom"

import Header from "./components/header"
import Footer from "./components/footer"
import Home from "./components/home"
import Pictures from './components/pictures'

function App() {
  

  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/pictures" element={<Pictures/>}></Route>
        </Routes>
      <Footer />
    </>
  )
}

export default App
