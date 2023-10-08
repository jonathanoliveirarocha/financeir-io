import React from "react";
import { useState, useEffect } from "react";
import * as D from "./styles";
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
      <D.Main>
        <h1>Conversor de Moedas</h1>
        <label>Valor: </label>
        <input
          min="0"
          type="number"
          placeholder="Valor"
          value={input}
          onChange={(e) => setInput(parseFloat(e.target.value))}
        />
        <select onChange={(e) => setFrom(e.target.value)}>
          <option value="brl">Real</option>
          <option value="usd">Dólar</option>
          <option value="eur">Euro</option>
          <option value="btc">Bitcoin</option>
        </select>
        {from !== "brl" ? (
          <p>BRL: ${(input * price["brl"]).toFixed(2)}</p>
        ) : null}
        {from !== "usd" ? (
          <p>USD: ${(input * price["usd"]).toFixed(2)}</p>
        ) : null}
        {from !== "eur" ? (
          <p>EUR: ${(input * price["eur"]).toFixed(2)}</p>
        ) : null}
        {from !== "btc" ? (
          <p>BTC: ${(input * price["btc"]).toFixed(9)}</p>
        ) : null}
      </D.Main>
    </>
  );
};
export default CurrencyConverter;
