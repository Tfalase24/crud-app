import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return element;
}

export default App;

function printName(user: User): string {
  return user.firstName + " " + user.lastName;
}

interface User {
  firstName: string;
  lastName: string;
}

const user: User = {
  firstName: "Adetito",
  lastName: "Falase",
};

const element: JSX.Element = (
  <div>
    <h1> Hello {printName(user)}</h1>
    <h2> This is my react app which I am using to learn react</h2>
  </div>
);
