import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";

const root=ReactDOM.createRoot(document.getElementById("root"));

//root.render(parent);

const AppLayout=()=>{
  return(
    <div className="App">
      <Header></Header>
      <Body></Body>
    </div>
  )
}

root.render(<AppLayout/>);