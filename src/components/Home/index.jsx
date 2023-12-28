import React from "react";
import * as D from "./styles";
import * as G from "../general";

const Home = () => {
  return (
    <>
      <G.Main>
        <D.Cta>
          <D.Control>
            <div>
              <D.H1>
                Controle sua vida financeira com o
                <D.LogoSpan> Financeir.io</D.LogoSpan>
              </D.H1>
              <p>Para quem gosta de praticidade, sem abrir mão da qualidade.</p>
              <a href="/controlefinanceiro">
                <D.Button>Começar</D.Button>
              </a>
            </div>
          </D.Control>
        </D.Cta>
        <D.Img src="/images/creditCard.png" alt="Cartão de Crédito" />
        {/* Used image: https://br.freepik.com/psd-gratuitas/maquete-de-cartao-de-credito-de-plastico_4436557.htm#query=cartao%20de%20credito&position=3&from_view=search&track=ais */}
      </G.Main>
    </>
  );
};
export default Home;
