import { useState, useRef } from "react";
function App() {
  const [secondPassed, setSecondPassed] = useState(0);
  let interval = useRef(0);

  function startClock() {
    interval.current = setInterval(() => {
      // setSecondPassed(function(s) {
      //   return s + 1;
      // })
      setSecondPassed(s => s + 1);
    }, 1000)
  }

  function stopeClock(){
    clearInterval(interval.current);
    interval.current = 0;
  }


  return <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh"}}>
    <div style={{fontSize: "100px"}}>
      <div>
        <button onClick={startClock}>Start clock</button>
        <button onClick={stopeClock}>End clock</button>
      </div>
      <div>
        {secondPassed}s
      </div>
    </div>
  </div>
}

export default App;