require("file-loader?name=[name].[ext]!../public/index.html");
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "./App.scss";

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);