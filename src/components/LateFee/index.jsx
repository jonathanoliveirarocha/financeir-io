import React from "react";
import { useState } from "react";
import * as D from "./styles";

const LateFee = () => {
  const [value, setValue] = useState(0);
  const [fees, setFees] = useState(0);
  const [typeFees, setTypeFees] = useState("daily");
  const [penalty, setPenalty] = useState(0);
  const [days, setDays] = useState(0);
  const [result, setResult] = useState([0, 0, 0]);

  function calculate() {
    let tempTypeFees =
      typeFees === "yearly"
        ? (1 + fees / 100) ** (1 / 365) - 1
        : typeFees === "monthly"
        ? (1 + fees / 100) ** (1 / 30) - 1
        : fees / 100;
    let tempPenality = value * (penalty / 100);
    let amount = value * (1 + penalty / 100) * (1 + tempTypeFees) ** days;
    let tempFees = amount - (value + tempPenality);
    setResult([tempPenality, tempFees, amount]);
  }
  return (
    <>
      <D.Main>
        <h1>Multa por Atraso</h1>
        <label>Valor do Débito: </label>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(parseFloat(e.target.value))}
        />
        <br />
        <label>Taxa de Juros (%): </label>
        <input
          type="number"
          value={fees}
          onChange={(e) => setFees(parseFloat(e.target.value))}
        />
        <select onChange={(e) => setTypeFees(e.target.value)}>
          <option value="daily">Diário</option>
          <option value="monthly">Mensal</option>
          <option value="yearly">Anual</option>
        </select>
        <br />
        <label>Multa (%): </label>
        <input
          type="number"
          value={penalty}
          onChange={(e) => setPenalty(parseFloat(e.target.value))}
        />
        <br />
        <label>Dias em Atraso: </label>
        <input
          type="number"
          value={days}
          onChange={(e) => setDays(parseFloat(e.target.value))}
        />
        <br />
        <button onClick={calculate}>Calcular</button>
        <p>Multa: R${result[0].toFixed(2)}</p>
        <p>Juros: R${result[1].toFixed(2)}</p>
        <p>Resultado: R${result[2].toFixed(2)}</p>
      </D.Main>
    </>
  );
};
export default LateFee;
