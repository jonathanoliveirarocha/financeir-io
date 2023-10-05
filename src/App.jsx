import { useState } from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Default from "./components/Default"
import './index.css'


function App() {
  const [page, setPage] = useState('')

  function changePage() {
		if (page === 'Default') {
			document.title = 'Home'
			return <Default/>
		}else{
      return 
    }
	}

  return (
    <>
      <Header setPage={setPage}/>
        {changePage()}
      <Footer />
      
    </>
  )
}

export default App
