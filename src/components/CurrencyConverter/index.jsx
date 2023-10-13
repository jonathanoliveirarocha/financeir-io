import React from "react";
import { useState, useEffect } from "react";
import * as D from "./styles";
import * as G from "../general";
import Axios from "axios";
import BrlIcon from "/images/brl-icon.svg";
import BtcIcon from "/images/btc-icon.svg";
import EurIcon from "/images/eur-icon.svg";
import UsdIcon from "/images/usd-icon.svg";

const CurrencyConverter = () => {
  const [from, setFrom] = useState("brl");
  const [price, setPrice] = useState([]);
  const [input, setInput] = useState(0);

  // Configuring conversation API
  useEffect(() => {
    Axios.get(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`
    ).then((res) => {
      setPrice(res.data[from]);
    });
  }, [from]);

  useEffect(() => {}, [price]);

  // Checking fields
  function voidInput() {
    if (document.querySelector("#value").value == "") {
      return true;
    }
    return false;
  }

  // Function loads values ​​only if the input is filled
  function calculate() {
    if (!voidInput()) {
      setInput(document.querySelector("#value").value);
    } else {
      setInput(0);
    }
  }
  return (
    <>
      <G.Main>
        <G.Card>
          <D.CurrencyContent>
            {/* Value input (Result is loaded simultaneously) */}
            <D.inputsDiv>
              <label htmlFor="value">Valor: </label>
              <G.Input id="value" min="0" type="number" onChange={calculate} />
              <G.Select onChange={(e) => setFrom(e.target.value)}>
                <option value="brl">Real</option>
                <option value="usd">Dólar</option>
                <option value="eur">Euro</option>
                <option value="btc">Bitcoin</option>
              </G.Select>
            </D.inputsDiv>
            {/* Cards with conversion results */}
            <D.CurrencyCardContent>
              {from !== "brl" ? (
                <D.coinContent>
                  <div id="brl-div">
                    <img src={BrlIcon} alt="Icone do Real" />
                    {/* Used Image: https://www.flaticon.com/br/icone-gratis/real-brasileiro_10500034?term=real+brasileiro&page=1&position=1&origin=tag&related_id=10500034 */}
                    <p>R${(input * price["brl"]).toFixed(2)}</p>
                  </div>
                </D.coinContent>
              ) : null}
              {from !== "usd" ? (
                <D.coinContent>
                  <div id="usd-div">
                    <img src={UsdIcon} alt="Icone do Dólar" />
                    {/* Used Image: https://www.svgrepo.com/svg/485107/dollar-banknote */}
                    <p>US${(input * price["usd"]).toFixed(2)}</p>
                  </div>
                </D.coinContent>
              ) : null}
              {from !== "eur" ? (
                <D.coinContent>
                  <div id="eur-div">
                    <img src={EurIcon} alt="Icone do Euro" />
                    {/* Used Image: https://www.svgrepo.com/svg/525863/euro */}
                    <p>€{(input * price["eur"]).toFixed(2)}</p>
                  </div>
                </D.coinContent>
              ) : null}
              {from !== "btc" ? (
                <D.coinContent>
                  <div id="btc-div">
                    <img src={BtcIcon} alt="Icone do Bitcoin" />
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
