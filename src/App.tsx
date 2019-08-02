import React from "react";
import Input from "./common/Input/Input";
import "./App.css";
// import Papa from "papaparse";

// Papa.parse("../plan.csv", {
//   download: true,
//   complete: function(results: any) {
//     console.log("Finished:", results.data);
//   }
// });

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Input />
      </header>
    </div>
  );
};

export default App;
