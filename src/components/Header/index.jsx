import { React, useState } from "react";
import * as H from "./styles";

const Header = (props) => {
  const [button, setButton] = useState(false);
  const changeButton = () => {
    setButton(!button);
  };
  return (
    <>
      <H.Header>
        <H.Link
          href="#Home"
          onClick={() => {
            props.setPage("Home");
          }}
        >
          <H.Logo>Financeir.io</H.Logo>
        </H.Link>
        <div className="nav-button-container">
          <div
            className={button ? "icon icon-active" : "icon"}
            onClick={changeButton}
          >
            <div className="button-menu hamburguer-menu-icon"></div>
          </div>
          <div className={button ? "menu menu-open" : "menu menu-close"}>
            <div className="list">
              <ul className="list-items">
              <li>
                  <H.Link
                    href="#ControleFinanceiro"
                    onClick={() => {
                      setButton(false);
                      props.setPage("FinancialControl");
                    }}
                  >
                    Controle Financeiro
                  </H.Link>
                </li>
                <li>
                  <H.Link
                    href="#JurosCompostos"
                    onClick={() => {
                      setButton(false);
                      props.setPage("CompoundInterest");
                    }}
                  >
                    Juros Compostos
                  </H.Link>
                </li>
                <li>
                  <H.Link
                    href="#ConversorDeMoedas"
                    onClick={() => {
                      setButton(false);
                      props.setPage("CurrencyConverter");
                    }}
                  >
                    Conversor de Moedas
                  </H.Link>
                </li>
                <li>
                  <H.Link
                    href="#MultaPorAtraso"
                    onClick={() => {
                      setButton(false);
                      props.setPage("LateFee");
                    }}
                  >
                    Multa por Atraso
                  </H.Link>
                </li>

                

                
                
              </ul>
            </div>
          </div>
        </div>

        <H.Nav>
          <H.Link
            href="#MultaPorAtraso"
            onClick={() => {
              props.setPage("LateFee");
            }}
          >
            Multa por Atraso
          </H.Link>
          <H.Link
            href="#ConversorDeMoedas"
            onClick={() => {
              props.setPage("CurrencyConverter");
            }}
          >
            Conversor de Moedas
          </H.Link>
          <H.Link
            href="#JurosCompostos"
            onClick={() => {
              props.setPage("CompoundInterest");
            }}
          >
            Juros Compostos
          </H.Link>
          <H.Link
            href="#ControleFinanceiro"
            onClick={() => {
              props.setPage("FinancialControl");
            }}
          >
            Controle Financeiro
          </H.Link>
        </H.Nav>
      </H.Header>
    </>
  );
};
export default Header;
