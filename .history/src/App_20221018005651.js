import { useEffect, useState } from "react";
import Input from "./components/Input";
import {
  autoCompleteMatrix,
  autoCompleteMatrix2,
} from "./utils/autoCompleteMatrix";
import { det } from "./utils/determinant";
import { gauss } from "./utils/gauss";
import { inverse } from "./utils/inverse";
import { method_yacobi } from "./utils/yakobi";
import { method_zeidel } from "./utils/zeidel";

function App() {
  const [columnCount, setColumnCount] = useState(3);
  const [twoDimArray, setTwoDimArray] = useState(
    Array(columnCount)
      .fill(0)
      .map(() => new Array(columnCount).fill(1))
  );
  const [oneDimArray, setOneDimArray] = useState(Array(columnCount).fill(1));
  const [solution, setSolution] = useState([]);
  const [deter, setDeter] = useState(0);
  const [inversed, setInversed] = useState([]);
  const onClickHandler = () => {
    setSolution(gauss(JSON.parse(JSON.stringify(twoDimArray)), oneDimArray));
    setDeter(det(JSON.parse(JSON.stringify(twoDimArray))));
    setInversed(inverse(JSON.parse(JSON.stringify(twoDimArray))));
  };
  const onClickHandler2 = () => {
    setTwoDimArray(autoCompleteMatrix(columnCount));
    setOneDimArray(autoCompleteMatrix2(columnCount));
  };
  if (solution.includes(NaN)) {
    setSolution(["matryca ne sumisna"]);
  }
  useEffect(() => {
    setTwoDimArray(
      Array(columnCount)
        .fill(0)
        .map(() => new Array(columnCount).fill(1))
    );
    setOneDimArray(Array(columnCount).fill(1));
  }, [columnCount]);
  const onChangeHandler = (ind1, ind2, value) => {
    const copy = JSON.parse(JSON.stringify(twoDimArray));
    copy[ind2][ind1] = value;
    setTwoDimArray(copy);
  };
  const onChangeHandler2 = (ind1, value) => {
    const copy = JSON.parse(JSON.stringify(oneDimArray));
    copy[ind1] = value;
    setOneDimArray(copy);
  };
  console.log(twoDimArray, oneDimArray, solution);
  console.log(
    method_yacobi(
      JSON.parse(JSON.stringify(twoDimArray)),
      JSON.parse(JSON.stringify(oneDimArray)),
      0.01
    )
  );
  // console.log(
  //   method_zeidel(
  //     JSON.parse(JSON.stringify(twoDimArray)),
  //     JSON.parse(JSON.stringify(oneDimArray)),
  //     0.01
  //   )
  // );
  return (
    <div className="App">
      <Input onChange={(e) => setColumnCount(+e.target.value)} />
      <div style={{ display: "flex" }}>
        {twoDimArray.map((rows, ind) => {
          return (
            <div
              style={{ margin: 10, display: "flex", flexDirection: "column" }}
              key={ind}
            >
              {rows.map((item, ind2) => (
                <Input
                  value={twoDimArray[ind2][ind]}
                  onChange={(e) => onChangeHandler(ind, ind2, +e.target.value)}
                  key={ind2}
                />
              ))}
            </div>
          );
        })}
        <div
          style={{
            margin: 10,
            marginLeft: 50,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {oneDimArray.map((item, ind) => (
            <Input
              key={ind}
              value={oneDimArray[ind]}
              onChange={(e) => onChangeHandler2(ind, +e.target.value)}
            />
          ))}
        </div>
      </div>
      <button
        style={{ margin: 20, height: 50, width: 140 }}
        onClick={() => onClickHandler()}
      >
        solve
      </button>
      <button
        style={{ margin: 20, height: 50, width: 140 }}
        onClick={() => onClickHandler2()}
      >
        auto complete
      </button>
      <hr />
      {solution.map((x, ind) => (
        <h2 key={ind}>{x}</h2>
      ))}
      <hr />
      {/* <h1>{deter}</h1> */}
      <hr />
      <div style={{ display: "flex" }}>
        {solution != "matrica me sumisna" ? (
          inversed.map((items, ind) => {
            return (
              <div
                key={ind}
                style={{ margin: 10, display: "flex", flexDirection: "column" }}
              >
                {items.map((item, ind2) => (
                  <h2 key={ind2}>{item}</h2>
                ))}
              </div>
            );
          })
        ) : (
          <div>ne sumisna</div>
        )}
      </div>
      <hr />
      <div></div>
    </div>
  );
}

export default App;
