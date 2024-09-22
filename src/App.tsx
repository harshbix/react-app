import ButtonComp from "./components/ButtonComp";
import Alert from "./components/Alert";
import { useState } from "react";

const App = () => {
  let text = "Hi mom!";
 const [alertVisble, setAlertVisible] =  useState(false);
 const handleClick = () =>
 {
    setAlertVisible(true);
 }
  return (
    <div>
      {alertVisble && <Alert onClose={() => setAlertVisible(false)}>
        <span>Alert</span>
        </Alert>}
      <ButtonComp>
        <button type="button" className="btn btn-primary" onClick={handleClick}>
          {text}
        </button>
      </ButtonComp>
    </div>
  );
};

export default App;
