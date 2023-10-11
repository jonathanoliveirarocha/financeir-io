import React from "react";
import * as D from "./styles";
import * as G from "../general";
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
    let tempFees =
      typeFees === "monthly" ? fees / 100 : (1 + fees / 100) ** (1 / 12) - 1;
    let tempTime = typeTime === "months" ? time : time * 12;
    let result = value;

    for (let i = 0; i < tempTime; i++) {
      result *= 1 + tempFees;
      result += injection;
    }
    setAmount(result);
    setValueWithInjetion(value + tempTime * injection);
  };

  function clean() {
    setValue(0);
    setInjection(0);
    setFees(0);
    setTime(0);
    setTypeTime("monthly");
    setTypeFees("mounts");
  }

  return (
    <>
      <G.Main>
        <G.Card>
          <D.InputsDiv>
            <D.GridContainer>
              <D.GridItem>
                <div>
                  <label className="margin-ajust-0" htmlFor="initial">
                    Valor Inicial:
                  </label>
                  <G.Input
                    id="initial"
                    type="number"
                    value={value}
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
                    value={injection}
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
                    value={fees}
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
                    value={time}
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
                <p>R${(amount - valueWithInjetion).toFixed(2)}</p>
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
