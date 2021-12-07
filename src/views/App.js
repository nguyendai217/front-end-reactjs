import "./App.scss";
import React from "react";
import ExampleComponent from "../components/ExampleComponent";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ExampleComponent note="Note1" address="adress"></ExampleComponent>
      </div>
    );
  }
}

export default App;
