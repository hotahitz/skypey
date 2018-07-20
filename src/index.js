import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import store from "./store";

function fancyLog() {
  console.log("%c Rendered with xxx", "background : purple; color: #FFF");
  console.log(store.getState());
}

const render = () => {
  fancyLog();
  return ReactDOM.render(<App />, document.getElementById("root"));
};
registerServiceWorker();
render();
store.subscribe(render);
