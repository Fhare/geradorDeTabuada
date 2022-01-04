import { useState, ChangeEvent } from "react";

import { TimesTable } from "./components/TimesTable";

import "./styles/global.scss";
import "./styles/app.scss";

function App() {

  const [tableValue, setTableValue] = useState(0);
  const [table, setTable] = useState<Number[]>([]);

  function handleOnChange (e: ChangeEvent<HTMLInputElement>) {
    const value = parseFloat(e.target.value);

    setTableValue(value);
  };

  const handleGenerateTable = () => {
    const table = [];

    for(let index = 1; index <= 10; index++) {
      let generate = tableValue * index;

      table.push(generate);
    };

    setTable(table);
  };

  return (
    <div className="container">
      <h1>Gerador de tabuada</h1>

      <div className="data_field">
        <input 
          placeholder="Qual tabuada gerar?"
          type="number"
          value={tableValue}
          onChange={handleOnChange}
        />

        <button 
          type="button"
          onClick={handleGenerateTable}
        >Gerar tabuada</button>
      </div>

      <TimesTable 
        tableValue={table}
        inputValue={tableValue}
      /> 
    </div>
  );
};

export default App;
