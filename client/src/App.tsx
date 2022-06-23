import React, {useEffect, useState} from 'react';
import Login from './Login';
import "./style/style.scss"

function App() {
  // ***************api 호출 예제***************
  // const [result, setResult] = useState<string>("");
  // const callApi = async () => {
  //    fetch("./api", { headers: { Accept: "application/json" }, method: "GET" })
  //      .then((res) => res.json())
  //      .then((data) => {
  //        setResult(data.test);
  //      })
  //      .catch((err) => {
  //        console.error("err", err);
  //      });
  // }
  // useEffect(()=>{
  //   callApi();
  // }, []);
  return (
    <div className="App">
        <Login />
    </div>
  );
}

export default App;
