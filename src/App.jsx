import Header from './Components/Header/header'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import './App.css'
import { useState } from 'react'

function App() {
  const [page, setPage] = useState("main")
  return (
    <>
      <Header setPage={setPage} page={page}/>
      <Main page={page}/>
      <Footer setPage={setPage}/>
    </>
  )
}

export default App
