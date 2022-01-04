import "../styles/table.scss";

interface TimesTableProps {
  tableValue: Array<Number>;
  inputValue: number;
};

export function TimesTable({ tableValue, inputValue }: TimesTableProps) {
  return (
    <>
      {
        tableValue.map((result, index) => {
          const currentIndex = index + 1;
          
          return (
            <div 
              key={index}
              className="calc_display"
            >
              <h2>{inputValue}</h2>
              <span>x</span>
              <h2>{currentIndex}</h2>
              <span>=</span>
              <h2>{result}</h2>
            </div>
          )
        })
      }
    </>
  );
};