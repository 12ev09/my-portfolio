import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouterComponent from "./component/Router";

function App() {
  return (
      <Router basename="/my-portfolio">
        <RouterComponent />
      </Router>
)
}
export default App;