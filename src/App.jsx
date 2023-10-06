import { useState } from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import CompoundInterest from "./components/CompoundInterest"
import CurrencyConverter from "./components/CurrencyConverter"
import LateFee from "./components/LateFee"
import FinancialControl from "./components/FinancialControl"
import './index.css'


function App() {
  const [page, setPage] = useState('Home')

  function changePage() {
		if (page === 'Home') {
			document.title = 'Financeir.io - Home'
			return <Home/>
		}else if(page === 'CompoundInterest'){
      document.title = 'Financeir.io - Juros Compostos'
			return <CompoundInterest/> 
    }else if(page === 'CurrencyConverter'){
      document.title = 'Financeir.io - Conversor de Moedas'
			return <CurrencyConverter/> 
    }else if(page === 'LateFee'){
      document.title = 'Financeir.io - Multa por atraso'
			return <LateFee/> 
    }else if(page === 'FinancialControl'){
      document.title = 'Financeir.io - Controle Financeiro'
			return <FinancialControl/> 
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
