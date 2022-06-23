import React, {useEffect, useState} from 'react';
import "./style/style.scss"

function App() {
  const [result, setResult] = useState<string>("");
  const callApi = async () => {
     fetch("./api", { headers: { Accept: "application/json" }, method: "GET" })
       .then((res) => res.json())
       .then((data) => {
         setResult(data.test);
       })
       .catch((err) => {
         console.error("err", err);
       });
  }
  useEffect(()=>{
    callApi();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>api result : {result}</p>
      </header>
    </div>
  );
}

export default App;
