import React, { useState } from "react";

function App() {
  let CurrentTime = new Date().toLocaleTimeString("en-GB");
  const [time, setTime] = useState(CurrentTime);
  setInterval(GetTime, 1000);
  function GetTime() {
    const newTime = new Date().toLocaleTimeString("en-GB");
    setTime(newTime);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={GetTime}>Get Time</button>
    </div>
  );
}

export default App;
