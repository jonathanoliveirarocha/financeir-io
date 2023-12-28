import { useState } from "react";
import * as H from "./styles";

const Header = () => {
  const [button, setButton] = useState(false);

  const changeButton = () => {
    setButton(!button);
  };

  return (
    <>
      <H.Header>
        <H.Link href="/">
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
                    href="/controlefinanceiro"
                    onClick={() => {
                      setButton(false);
                    }}
                  >
                    Controle Financeiro
                  </H.Link>
                </li>
                <li>
                  <H.Link
                    href="/juroscompostos"
                    onClick={() => {
                      setButton(false);
                    }}
                  >
                    Juros Compostos
                  </H.Link>
                </li>
                <li>
                  <H.Link
                    href="/conversordemoedas"
                    onClick={() => {
                      setButton(false);
                    }}
                  >
                    Conversor de Moedas
                  </H.Link>
                </li>
                <li>
                  <H.Link
                    href="/multaporatraso"
                    onClick={() => {
                      setButton(false);
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
          <H.Link href="/multaporatraso">Multa por Atraso</H.Link>
          <H.Link href="/conversordemoedas">Conversor de Moedas</H.Link>
          <H.Link href="/juroscompostos">Juros Compostos</H.Link>
          <H.Link href="/controlefinanceiro">Controle Financeiro</H.Link>
        </H.Nav>
      </H.Header>
    </>
  );
};
export default Header;
