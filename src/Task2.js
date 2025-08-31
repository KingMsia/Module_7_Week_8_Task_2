import React, { useState } from "react";
import Button from "./button";
import Card from "./card";

const App = () => {
  const [result, setResult] = useState("");

  const doorhandle = (door) => {
    if (door === 3) {
      setResult("You win one million dollars! Congratulations!");
    } else {
      setResult("There is nothing behind this door.");
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <Card
        content="One million dollars is behind one of the three doors. Pick one."
        style={{ marginBottom: "20px" }}
      />

      <Button label="Door 1" onClick={() => doorhandle(1)} />
      <Button label="Door 2" onClick={() => doorhandle(2)} />
      <Button label="Door 3" onClick={() => doorhandle(3)} />

      {result && <Card content={result} style={{ marginTop: "20px" }} />}
    </div>
  );
};

export default App;
