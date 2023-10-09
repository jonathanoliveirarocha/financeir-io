import React from "react";
import { useRef, useState, useEffect } from "react";
import { v4 } from "uuid";
import * as D from "./styles";
import * as G from "../general";

const FinancialControl = () => {
  const [list, setList] = useState([]);
  const textRef = useRef();
  const valueRef = useRef();
  const typeRef = useRef();

  function addItem() {
    setList([
      {
        id: v4(),
        name: textRef.current.value,
        value: parseFloat(valueRef.current.value),
        type: typeRef.current.value,
      },
      ...list,
    ]);
  }

  function reload() {
    let tempIn = 0;
    let tempOut = 0;

    list.map((element) =>
      element.type === "in"
        ? (tempIn += element.value)
        : (tempOut += element.value)
    );
    return [
      tempIn.toFixed(2),
      tempOut.toFixed(2),
      (tempIn - tempOut).toFixed(2),
    ];
  }

  function deleteElement(id) {
    setList(list.filter((element) => element.id !== id));
  }

  const total = reload();
  return (
    <G.Main>
      <G.Card>
        <h1>Controle Financeiro</h1>
        <G.DivSpaceB>
          <G.MiniCard>
            <div>
              <p>Entradas:</p>
              <p>R${total[0]}</p>
            </div>
          </G.MiniCard>
          <G.MiniCard>
            <div>
              <p>Saídas:</p>
              <p>R${total[1]}</p>
            </div>
          </G.MiniCard>
          <G.MiniCard>
            <div>
              <p>Total:</p>
              <p>R${total[2]}</p>
            </div>
          </G.MiniCard>
        </G.DivSpaceB>

        <G.DivSpaceB>
          <div>
            <label>Rótulo: </label>
            <G.Input type="text" ref={textRef} />
          </div>
          <div>
            <label>Valor: </label>
            <G.Input type="number" ref={valueRef} />
          </div>
          <div>
            <label>Tipo: </label>
            <G.Select ref={typeRef}>
              <option value="in">Entrada</option>
              <option value="out">Saída</option>
            </G.Select>
          </div>

          <G.Button onClick={addItem}>Adicionar</G.Button>
        </G.DivSpaceB>

        <G.MoneyView>
          {list.map((element) => (
            <G.ElementMoneyView key={element.id}>
              <p>{element.name}</p>
              <p>R${element.value.toFixed(2)}</p>
              {element.type === "in" ? (
                <G.In>Entrada</G.In>
              ) : (
                <G.Out>Saída</G.Out>
              )}
              <button
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
                id="remove-btn"
                onClick={() => deleteElement(element.id)}
              >
                ❌
              </button>
            </G.ElementMoneyView>
          ))}
        </G.MoneyView>
      </G.Card>
    </G.Main>
  );
};
export default FinancialControl;
