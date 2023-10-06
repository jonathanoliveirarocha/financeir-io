import React from "react"
import * as H from "./styles"

const Header = (props) =>{
    return (
        <>
            <H.Header>
                <H.Link href="#Home" onClick={() => {props.setPage('Home')}}><H.Logo>Financeir.io</H.Logo></H.Link>
                
                <H.Nav>
                    <H.Link href="#MultaPorAtraso" onClick={() => {props.setPage('LateFee')}}>Multa por Atraso</H.Link>
                    <H.Link href="#ConversorDeMoedas" onClick={() => {props.setPage('CurrencyConverter')}}>Conversor de Moedas</H.Link>
                    <H.Link href="#JurosCompostos" onClick={() => {props.setPage('CompoundInterest')}}>Juros Compostos</H.Link>
                    <H.Link href="#ControleFinanceiro" onClick={() => {props.setPage('FinancialControl')}}>Controle Financeiro</H.Link>
                </H.Nav>
            </H.Header>  
        </>
                  
    )
}
export default Header