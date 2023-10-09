import React from "react";
import { useRef, useState, useEffect } from "react";
import { v4 } from "uuid";
import * as D from "./styles";

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
    return [tempIn, tempOut, [tempIn - tempOut]];
  }

  function deleteElement(id) {
    setList(list.filter((element) => element.id !== id));
  }
  const total = reload();
  return (
    <div>
      <h1>Controle Financeiro</h1>
      <p>Entradas: {total[0]}</p>
      <p>Saídas: {total[1]}</p>
      <p>Total: {total[2]}</p>
      <label>Rótulo: </label>
      <input type="text" ref={textRef} />
      <label>Valor: </label>
      <input type="number" ref={valueRef} />
      <label>Tipo: </label>
      <select ref={typeRef}>
        <option value="in">Entrada</option>
        <option value="out">Saída</option>
      </select>
      <button onClick={addItem}>Adicionar</button>
      <div>
        {list.map((element) => (
          <div key={element.id}>
            <p>{element.name}</p>
            <p>{element.value}</p>
            <p>{element.type}</p>
            <button onClick={() => deleteElement(element.id)}>❌</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FinancialControl;
