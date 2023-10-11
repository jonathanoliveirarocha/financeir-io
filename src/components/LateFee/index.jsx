import React from "react";
import { useState } from "react";
import * as D from "./styles";
import * as G from "../general";
import * as S from "../CompoundInterest/styles";

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

  function clean() {
    setValue(0);
    setFees(0);
    setDays(0);
    setPenalty(0);
    setTypeFees("daily");
  }

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
                    value={value}
                    onChange={(e) => setValue(parseFloat(e.target.value))}
                  />
                </div>

                <div>
                  <label htmlFor="fees">Juros (%): </label>
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
                    value={penalty}
                    onChange={(e) => setPenalty(parseFloat(e.target.value))}
                  />
                </div>

                <div>
                  <label htmlFor="time">Dias em Atraso: </label>
                  <G.Input
                    id="time"
                    type="number"
                    value={days}
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
            <S.ResultCard id="amountCard">
              <div id="fineDiv">
                <p>Multa</p>
                <p>R${result[0].toFixed(2)}</p>
              </div>
            </S.ResultCard>

            <S.ResultCard id="amountCard">
              <div id="feesDiv">
                <p>Juros</p>
                <p>R${result[1].toFixed(2)}</p>
              </div>
            </S.ResultCard>

            <S.ResultCard id="amountCard">
              <div id="amountDiv">
                <p>Montante</p>
                <p>R${result[2].toFixed(2)}</p>
              </div>
            </S.ResultCard>
          </S.ResultContainer>
        </G.Card>
      </G.Main>
    </>
  );
};
export default LateFee;
