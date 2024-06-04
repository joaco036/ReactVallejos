import './css/main.css'
import { ItemListContainer } from './components/ItemListContainer'
import { Header } from './components/header/Header'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { IntemDetailContainer } from './components/IntemDetailContainer'




function App() {


  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
      <Route path="/item/:itemId" element={<IntemDetailContainer/>}/>
    </Routes>
    <footer>hola me llamo footer</footer>
    </BrowserRouter>
  )
}

export default App
