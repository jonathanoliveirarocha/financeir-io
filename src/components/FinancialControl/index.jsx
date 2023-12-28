import React, { useRef, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import * as D from "./styles";
import * as G from "../general";

const FinancialControl = () => {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("arrayShowItems")) || []
  );
  const textRef = useRef();
  const valueRef = useRef();
  const typeRef = useRef();

  useEffect(() => {
    localStorage.setItem("arrayShowItems", JSON.stringify(list));
  }, [list]);

  const voidInput = () => {
    if (!textRef.current.value || !valueRef.current.value) {
      alert("Por favor, preencha todos os campos!");
      return true;
    }
    return false;
  };

  const negativeValue = () => {
    if (valueRef.current.value < 0) {
      alert("Os valores preenchidos não podem ser negativos!");
      return true;
    }
    return false;
  };

  const addItem = () => {
    if (!voidInput() && !negativeValue()) {
      const newItem = {
        id: uuid(),
        name: textRef.current.value,
        value: parseFloat(valueRef.current.value),
        type: typeRef.current.value,
      };
      setList([newItem, ...list]);
      textRef.current.value = "";
      valueRef.current.value = "";
      typeRef.current.value = "in";
    }
  };

  const deleteElement = (id) => {
    setList(list.filter((element) => element.id !== id));
  };

  const calculateTotal = () => {
    let tempIn = 0;
    let tempOut = 0;
    list.forEach((element) => {
      element.type === "in"
        ? (tempIn += element.value)
        : (tempOut += element.value);
    });
    return [
      tempIn.toFixed(2),
      tempOut.toFixed(2),
      (tempIn - tempOut).toFixed(2),
    ];
  };

  const total = calculateTotal();

  return (
    <G.Main>
      <G.Card>
        <D.DivSpaceB>
          <D.MiniCard id="in-card">
            <div>
              <p>Entradas</p>
              <p>R${total[0]}</p>
            </div>
          </D.MiniCard>
          <D.MiniCard id="out-card">
            <div>
              <p>Saídas</p>
              <p>R${total[1]}</p>
            </div>
          </D.MiniCard>
          <D.MiniCard id="total-card">
            <div>
              <p>Total</p>
              <p>R${total[2]}</p>
            </div>
          </D.MiniCard>
        </D.DivSpaceB>

        <D.DivSpaceB>
          <div>
            <label htmlFor="mark">Rótulo: </label>
            <G.Input id="mark" type="text" ref={textRef} />
          </div>
          <div>
            <label htmlFor="value">Valor: </label>
            <G.Input id="value" type="number" ref={valueRef} min={0} />
          </div>
          <div>
            <label htmlFor="type">Tipo: </label>
            <G.Select id="type" ref={typeRef}>
              <option value="in">Entrada</option>
              <option value="out">Saída</option>
            </G.Select>
          </div>

          <G.Button onClick={addItem}>Adicionar</G.Button>
        </D.DivSpaceB>

        <D.MoneyView>
          {list.map((element) => (
            <D.ElementMoneyView key={element.id}>
              <D.ElementMoneyCenter id="ElementMoneyLeft">
                <p>{element.name}</p>
              </D.ElementMoneyCenter>

              <D.ElementMoneyCenter>
                <p>R${element.value.toFixed(2)}</p>
              </D.ElementMoneyCenter>

              <D.ElementMoneyCenter>
                {element.type === "in" ? (
                  <D.In>Entrada</D.In>
                ) : (
                  <D.Out>Saída</D.Out>
                )}
              </D.ElementMoneyCenter>

              <D.ElementMoneyCenter>
                <button
                  id="deleteElementButton"
                  onClick={() => deleteElement(element.id)}
                >
                  ❌
                </button>
              </D.ElementMoneyCenter>
            </D.ElementMoneyView>
          ))}
        </D.MoneyView>
      </G.Card>
    </G.Main>
  );
};

export default FinancialControl;
