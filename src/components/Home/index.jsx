import React from "react";
import * as D from "./styles";
import * as G from "../general";

const Home = (props) => {
  return (
    <>
      <G.Main>
        <D.Cta>
          <D.Control>
            <D.H1>
              Controle sua vida financeira com o
              <D.LogoSpan> Financeir.io</D.LogoSpan>
            </D.H1>
            <p>Para quem gosta de praticidade, sem abrir mão da qualidade.</p>
            <a
              href="#ControleFinanceiro"
              onClick={() => {
                props.setPage("FinancialControl");
              }}
            >
              <D.Button href="#ControleFinanceiro">Começar</D.Button>
            </a>
          </D.Control>
        </D.Cta>

        <D.Img src="/images/creditCard.png" alt="" />
      </G.Main>
    </>
  );
};
export default Home;
