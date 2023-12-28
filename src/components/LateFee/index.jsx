import React, { useState } from "react";
import * as G from "../general";
import * as S from "../CompoundInterest/styles";

const LateFee = () => {
  const [value, setValue] = useState(0);
  const [fees, setFees] = useState(0);
  const [typeFees, setTypeFees] = useState("daily");
  const [penalty, setPenalty] = useState(0);
  const [days, setDays] = useState(0);
  const [result, setResult] = useState([0, 0, 0]);

  const voidInput = () => {
    const inputs = ["value", "penalty", "fees", "time"];
    return inputs.some((id) => !document.querySelector(`#${id}`).value);
  };

  const negativeInput = () => {
    const inputs = ["value", "penalty", "fees", "time"];
    return inputs.some((id) => document.querySelector(`#${id}`).value < 0);
  };

  const calculate = () => {
    if (!voidInput() && !negativeInput()) {
      const tempTypeFees =
        typeFees === "yearly"
          ? Math.pow(1 + fees / 100, 1 / 365) - 1
          : typeFees === "monthly"
          ? Math.pow(1 + fees / 100, 1 / 30) - 1
          : fees / 100;

      const tempPenalty = value * (penalty / 100);
      const amount = value * (1 + penalty / 100) * Math.pow(1 + tempTypeFees, days);
      const tempFees = amount - (value + tempPenalty);
      setResult([tempPenalty, tempFees, amount]);
    }
  };

  const clean = () => {
    const inputs = document.querySelectorAll("#InputsDivLateFee input");
    inputs.forEach((input) => {
      input.value = "";
    });
    setTypeFees("daily");
    setResult([0, 0, 0]);
  };

  return (
    <>
      <G.Main>
        <G.Card>
          <S.InputsDiv id="InputsDivLateFee">
            <S.GridContainer id="grid-ajust">
              <S.GridItem>
                <div>
                  <label htmlFor="value">Débito: </label>
                  <G.Input
                    id="value"
                    type="number"
                    onChange={(e) => setValue(parseFloat(e.target.value))}
                  />
                </div>

                <div>
                  <label htmlFor="fees">Juros (%): </label>
                  <G.Input
                    id="fees"
                    type="number"
                    onChange={(e) => setFees(parseFloat(e.target.value))}
                  />
                  <G.Select
                    value={typeFees}
                    onChange={(e) => setTypeFees(e.target.value)}
                  >
                    <option value="daily">Diário</option>
                    <option value="monthly">Mensal</option>
                    <option value="yearly">Anual</option>
                  </G.Select>
                </div>
              </S.GridItem>
              <S.GridItem>
                <div>
                  <label htmlFor="penalty">Multa (%): </label>
                  <G.Input
                    id="penalty"
                    type="number"
                    onChange={(e) => setPenalty(parseFloat(e.target.value))}
                  />
                </div>

                <div>
                  <label htmlFor="time">Dias em Atraso: </label>
                  <G.Input
                    id="time"
                    type="number"
                    onChange={(e) => setDays(parseFloat(e.target.value))}
                  />
                </div>
              </S.GridItem>
            </S.GridContainer>
          </S.InputsDiv>

          <S.ButtonDiv id="ButtonDivLateFee">
            <G.Button onClick={calculate}>Calcular</G.Button>
            <S.ButtonClean onClick={clean}>Limpar</S.ButtonClean>
          </S.ButtonDiv>

          <S.ResultContainer id="ResultContainerLateFee">
            {result.map((value, index) => (
              <S.ResultCard key={index} id="amountCard">
                <div id={index === 0 ? "fineDiv" : index === 1 ? "feesDiv" : "amountDiv"}>
                  <p>{index === 0 ? "Multa" : index === 1 ? "Juros" : "Montante"}</p>
                  <p>R${value.toFixed(2)}</p>
                </div>
              </S.ResultCard>
            ))}
          </S.ResultContainer>
        </G.Card>
      </G.Main>
    </>
  );
};

export default LateFee;
