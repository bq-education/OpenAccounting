import React from "react";
import ReactTooltip from "react-tooltip";
import MainComponent from "./components/MainComponent";

function App() {
  return (
    <div>
      <ReactTooltip
        type="info"
        effect="solid"
        data-multiline={true}
        html={true}
      />
      <MainComponent />
    </div>
  );
}

export default App;
