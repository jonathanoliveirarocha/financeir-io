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

  useEffect(() => {
    convert();
  }, [price]);

  function convert() {
    setInput(document.querySelector("#price").value);
  }

  return (
    <>
      <D.Main>
        <h1>Conversor de Moedas</h1>
        <input
          onChange={convert}
          min="0"
          type="number"
          id="price"
          placeholder="Valor (R$)"
        />
        <p>USD: ${(input * price["usd"]).toFixed(2)}</p>
        <p>EUR: ${(input * price["eur"]).toFixed(2)}</p>
      </D.Main>
    </>
  );
};
export default CurrencyConverter;
