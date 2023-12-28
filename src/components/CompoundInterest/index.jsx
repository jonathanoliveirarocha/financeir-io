import React, { useState } from "react";
import * as D from "./styles";
import * as G from "../general";

const CompoundInterest = () => {
  const [value, setValue] = useState(0);
  const [fees, setFees] = useState(0);
  const [time, setTime] = useState(0);
  const [injection, setInjection] = useState(0);
  const [typeFees, setTypeFees] = useState("monthly");
  const [typeTime, setTypeTime] = useState("months");
  const [amount, setAmount] = useState(0);
  const [valueWithInjection, setValueWithInjection] = useState(0);

  const voidInput = () => {
    const inputs = ["initial", "addition", "fees", "time"];
    return inputs.some((inputId) => document.querySelector(`#${inputId}`).value === "");
  };

  const negativeInput = () => {
    const inputs = ["initial", "addition", "fees", "time"];
    return inputs.some((inputId) => parseFloat(document.querySelector(`#${inputId}`).value) < 0);
  };

  const calculate = () => {
    if (!voidInput() && !negativeInput()) {
      const tempFees = typeFees === "monthly" ? fees / 100 : Math.pow(1 + fees / 100, 1 / 12) - 1;
      const tempTime = typeTime === "months" ? time : time * 12;

      let result = value;
      for (let i = 0; i < tempTime; i++) {
        result *= 1 + tempFees;
        result += injection;
      }

      setAmount(result);
      setValueWithInjection(value + tempTime * injection);
    }
  };

  const clean = () => {
    const inputs = document.querySelectorAll(".input-elements input");
    inputs.forEach((input) => {
      input.value = "";
    });

    setValueWithInjection(0);
    setAmount(0);
    setTypeTime("months");
    setTypeFees("monthly");
  };

  return (
    <>
      <G.Main>
        <G.Card>
          <D.InputsDiv>
            <D.GridContainer className="input-elements">
              <D.GridItem>
                <div>
                  <label className="margin-ajust-0" htmlFor="initial">
                    Valor Inicial:
                  </label>
                  <G.Input
                    id="initial"
                    type="number"
                    onChange={(e) => setValue(parseFloat(e.target.value))}
                  />
                </div>
                <div>
                  <label className="margin-ajust-1" htmlFor="addition">
                    Adição Mensal:
                  </label>
                  <G.Input
                    id="addition"
                    type="number"
                    onChange={(e) => setInjection(parseFloat(e.target.value))}
                  />
                </div>
              </D.GridItem>
              <D.GridItem>
                <div>
                  <label htmlFor="fees">Taxa de Juros (%):</label>
                  <G.Input
                    id="fees"
                    type="number"
                    onChange={(e) => setFees(parseFloat(e.target.value))}
                  />
                  <G.Select
                    value={typeFees}
                    onChange={(e) => setTypeFees(e.target.value)}
                  >
                    <option value="monthly">Mensal</option>
                    <option value="yearly">Anual</option>
                  </G.Select>
                </div>

                <div>
                  <label htmlFor="time">Período de Tempo:</label>
                  <G.Input
                    id="time"
                    type="number"
                    onChange={(e) => setTime(parseInt(e.target.value))}
                  />
                  <G.Select
                    value={typeTime}
                    onChange={(e) => setTypeTime(e.target.value)}
                  >
                    <option value="months">Meses</option>
                    <option value="years">Anos</option>
                  </G.Select>
                </div>
              </D.GridItem>
            </D.GridContainer>

            <D.ButtonDiv>
              <G.Button onClick={calculate}>Calcular</G.Button>
              <D.ButtonClean onClick={clean}>Limpar</D.ButtonClean>
            </D.ButtonDiv>
          </D.InputsDiv>

          <D.ResultContainer>
            <D.ResultCard id="yieldCard">
              <div>
                <p>Rendimento</p>
                <p>R${(amount - valueWithInjection).toFixed(2)}</p>
              </div>
            </D.ResultCard>

            <D.ResultCard id="amountCard">
              <div>
                <p>Montante</p>
                <p>R${amount.toFixed(2)}</p>
              </div>
            </D.ResultCard>
          </D.ResultContainer>
        </G.Card>
      </G.Main>
    </>
  );
};

export default CompoundInterest;
