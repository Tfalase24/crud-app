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
  urlOfPicture?: string;
  descriptionOfPicture?: string;
}

const user: User = {
  firstName: "Adetito",
  lastName: "Falase",
  urlOfPicture:
    "https://media.euobserver.com/75ba88da8a99cadb376a759df8710279.jpg",
  descriptionOfPicture: "Queen Lizzie and I sipping Cherry B's... Four minimum",
};

const element: JSX.Element = (
  <div>
    <h1> Hello {printName(user)}</h1>
    <h2> This is my react app which I am using to learn react</h2>
    <img src={user.urlOfPicture} width={200}></img>
    <h3>{user.descriptionOfPicture}</h3>
  </div>
);
