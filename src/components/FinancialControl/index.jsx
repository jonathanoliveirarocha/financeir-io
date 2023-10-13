import React from "react";
import { useRef, useState } from "react";
import { v4 } from "uuid";
import * as D from "./styles";
import * as G from "../general";

const FinancialControl = () => {
  // Loading information saved to local storage
  const listLocalStorage =
    JSON.parse(localStorage.getItem("arrayShowItems")) || [];

  const [list, setList] = useState(listLocalStorage);
  const textRef = useRef();
  const valueRef = useRef();
  const typeRef = useRef();

  // Checking fields
  function voidInput() {
    if (textRef.current.value == "" || valueRef.current.value == "") {
      alert("Por favor, preencha todos os campos!");
      return true;
    }
    return false;
  }

  function negativeValue() {
    if (valueRef.current.value < 0) {
      alert("O valor preenchido deve não pode ser negativo!");
      return true;
    }
    return false;
  }

  // Function to add element to array
  function addItem() {
    if (!voidInput() && !negativeValue()) {
      setList([
        {
          id: v4(),
          name: textRef.current.value,
          value: parseFloat(valueRef.current.value),
          type: typeRef.current.value,
        },
        ...list,
      ]);
      textRef.current.value = "";
      valueRef.current.value = "";
      typeRef.current.value = "in";
    }
  }

  // Reloading result information
  function reload() {
    let tempIn = 0;
    let tempOut = 0;
    localStorage.setItem("arrayShowItems", JSON.stringify(list));
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

  // Route to delete element
  function deleteElement(id) {
    setList(list.filter((element) => element.id !== id));
  }

  // Constant to pass result array to screen
  const total = reload();
  return (
    <G.Main>
      <G.Card>
        {/* Result of all operations */}
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

        {/* Section to add new element */}
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

          {/* Add button */}
          <G.Button onClick={addItem}>Adicionar</G.Button>
        </D.DivSpaceB>

        {/* Loading history of all saved operations */}
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
                {/* Delete button */}
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
