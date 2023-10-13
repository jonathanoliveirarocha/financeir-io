import React from "react";
import { useState } from "react";
import * as D from "./styles";
import * as G from "../general";
import * as S from "../CompoundInterest/styles";

const LateFee = () => {
  // Variables used
  const [value, setValue] = useState(0);
  const [fees, setFees] = useState(0);
  const [typeFees, setTypeFees] = useState("daily");
  const [penalty, setPenalty] = useState(0);
  const [days, setDays] = useState(0);
  const [result, setResult] = useState([0, 0, 0]);

  // Checking fields
  function voidInput() {
    if (
      document.querySelector("#value").value === "" ||
      document.querySelector("#penalty").value === "" ||
      document.querySelector("#fees").value === "" ||
      document.querySelector("#time").value === ""
    ) {
      alert("Por favor, preencha todos os campos!");
      return true;
    }
    return false;
  }

  function negativeInput() {
    if (
      document.querySelector("#value").value < 0 ||
      document.querySelector("#penalty").value < 0 ||
      document.querySelector("#fees").value < 0 ||
      document.querySelector("#time").value < 0
    ) {
      alert("Os valores não podem ser negativos!");
      return true;
    }
    return false;
  }

  // Function to calculate result
  function calculate() {
    if (!voidInput() && !negativeInput()) {
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
  }

  // Function to clear all fields
  function clean() {
    let inputs = document.querySelectorAll("#InputsDivLateFee input");
    inputs.forEach((input) => {
      input.value = "";
    });
    setTypeFees("daily");
    setResult([0, 0, 0]);
  }

  return (
    <>
      <G.Main>
        <G.Card>
          {/* Div with all inputs */}
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
          {/* Buttons to calculte and clean */}
          <S.ButtonDiv id="ButtonDivLateFee">
            <G.Button onClick={calculate}>Calcular</G.Button>
            <S.ButtonClean onClick={clean}>Limpar</S.ButtonClean>
          </S.ButtonDiv>
          {/* Showing all results */}
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
