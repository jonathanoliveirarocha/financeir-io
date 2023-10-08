import React from "react";
import * as D from "./styles";
import { useState } from "react";

const CompoundInterest = () => {
  const [value, setValue] = useState(0);
  const [fees, setFees] = useState(0);
  const [time, setTime] = useState(0);
  const [injection, setInjection] = useState(0);
  const [typeFees, setTypeFees] = useState("monthly");
  const [typeTime, setTypeTime] = useState("months");
  const [amount, setAmount] = useState(0);
  const [valueWithInjetion, setValueWithInjetion] = useState(0);

  const calculate = () => {
      let tempFees = typeFees==="monthly"? fees/100:  ((1 + (fees/100)) ** (1/12)) - 1
      let tempTime = typeTime==="months"?time: time*12
      let result = value 
      
      for(let i = 0; i < tempTime;i++){
        result*= (1 + tempFees) 
        result+=injection
      }
      setAmount(result)
      setValueWithInjetion(value+tempTime*injection)
      
  }

  return (
    <>
      <D.Main>
        <h1>Juros Compostos</h1>
        <label>Valor Inicial:</label>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(parseFloat(e.target.value))}
        />
        <br />

        <label>Adição Mensal:</label>
        <input
          type="number"
          value={injection}
          onChange={(e) => setInjection(parseFloat(e.target.value))}
        />
        <br />

        <label>Taxa de Juros (%):</label>
        <input
          type="number"
          value={fees}
          onChange={(e) => setFees(parseFloat(e.target.value))}
         
        />
        <select  onChange={(e) => setTypeFees(e.target.value)}>
          <option  value="monthly">Mensal</option>
          <option value="yearly">Anual</option>
        </select>

        <br />

        <label>Período de Tempo:</label>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(parseInt(e.target.value))}
        />
        <select onChange={(e) => setTypeTime(e.target.value)}>
          <option  value="months">Meses</option>
          <option value="years">Anos</option>
        </select>
        <br />
        <button onClick={calculate}>Calcular</button>
        <div>
          <p>Seu dinheiro rendeu R${(amount- valueWithInjetion).toFixed(2)}, resultando em um montante de R${amount.toFixed(2)}.</p>
        </div>
      </D.Main>
    </>
  );
};
export default CompoundInterest;
