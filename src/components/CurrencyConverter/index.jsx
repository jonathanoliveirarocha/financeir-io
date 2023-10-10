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
          <D.CurrencyCardContent>
            {from !== "brl" ? (
              <div>
                <p>BRL:</p>
                <p>${(input * price["brl"]).toFixed(2)}</p>
              </div>
            ) : null}
            {from !== "usd" ? (
              <div>
                <p>USD:</p>
                <p>${(input * price["usd"]).toFixed(2)}</p>
              </div>
            ) : null}
            {from !== "eur" ? (
              <div>
                <p>EUR:</p>
                <p>${(input * price["eur"]).toFixed(2)}</p>
              </div>
            ) : null}
            {from !== "btc" ? (
              <div>
                <p>BTC:</p>
                <p>${(input * price["btc"]).toFixed(9)}</p>
              </div>
            ) : null}
          </D.CurrencyCardContent>
        </G.Card>
      </G.Main>
    </>
  );
};
export default CurrencyConverter;
