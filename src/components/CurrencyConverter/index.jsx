import React from "react";
import { useState, useEffect } from "react";
import * as D from "./styles";
import * as G from "../general";
import Axios from "axios";

const CurrencyConverter = () => {
  const [from, setFrom] = useState("brl");
  const [price, setPrice] = useState([]);
  const [input, setInput] = useState(0);

  useEffect(() => {
    Axios.get(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`
    ).then((res) => {
      setPrice(res.data[from]);
    });
  }, [from]);

  useEffect(() => {}, [price]);

  return (
    <>
      <G.Main>
        <G.Card>
          <D.CurrencyContent>
            <D.inputsDiv>
              <label>Valor: </label>
              <G.Input
                min="0"
                type="number"
                placeholder="Valor"
                value={input}
                onChange={(e) => setInput(parseFloat(e.target.value))}
              />
              <G.Select onChange={(e) => setFrom(e.target.value)}>
                <option value="brl">Real</option>
                <option value="usd">Dólar</option>
                <option value="eur">Euro</option>
                <option value="btc">Bitcoin</option>
              </G.Select>
            </D.inputsDiv>

            <D.CurrencyCardContent>
              {from !== "brl" ? (
                <D.coinContent>
                  <div id="brl-div">
                    <img
                      class="coin-icon"
                      src="/public/images/brl-icon.svg"
                      alt="Icone do Real"
                    />
                    {/* Used Image: https://www.flaticon.com/br/icone-gratis/real-brasileiro_10500034?term=real+brasileiro&page=1&position=1&origin=tag&related_id=10500034 */}
                    <p>R${(input * price["brl"]).toFixed(2)}</p>
                  </div>
                </D.coinContent>
              ) : null}
              {from !== "usd" ? (
                <D.coinContent>
                  <div id="usd-div">
                    <img
                      class="coin-icon"
                      src="/public/images/usd-icon.svg"
                      alt="Icone do Dólar"
                    />
                    {/* Used Image: https://www.svgrepo.com/svg/485107/dollar-banknote */}
                    <p>US${(input * price["usd"]).toFixed(2)}</p>
                  </div>
                </D.coinContent>
              ) : null}
              {from !== "eur" ? (
                <D.coinContent>
                  <div id="eur-div">
                    <img
                      class="coin-icon"
                      src="/public/images/eur-icon.svg"
                      alt="Icone do Euro"
                    />
                    {/* Used Image: https://www.svgrepo.com/svg/525863/euro */}
                    <p>€{(input * price["eur"]).toFixed(2)}</p>
                  </div>
                </D.coinContent>
              ) : null}
              {from !== "btc" ? (
                <D.coinContent>
                  <div id="btc-div">
                    <img
                      class="coin-icon"
                      src="/public/images/btc-icon.svg"
                      alt="Icone do Bitcoin"
                    />
                    {/* Used Image: https://www.svgrepo.com/svg/452169/bitcoin */}
                    <p>{(input * price["btc"]).toFixed(9)} BTC</p>
                  </div>
                </D.coinContent>
              ) : null}
            </D.CurrencyCardContent>
          </D.CurrencyContent>
        </G.Card>
      </G.Main>
    </>
  );
};
export default CurrencyConverter;
