import React from "react"
import * as H from "./styles"

const Header = (props) =>{
    return (
        <>
            <H.Header>
                <H.Logo>Financeir.io</H.Logo>
                <H.Nav> 
                    <H.Link href="#Sobre" onClick={() => {props.setPage('')}}>Sobre</H.Link>
                    <H.Link onClick={() => {props.setPage('Default')}} href="#Home">Inicio</H.Link >
                </H.Nav>
            </H.Header>  
        </>
                  
    )
}
export default Header