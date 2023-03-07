import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import User from "./interfaces/User";

function App(): JSX.Element {
  return element;
}

export default App;

function printName(user: User): string {
  return user.firstName + " " + user.lastName;
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
    <Welcome firstName={user.firstName} lastName={user.lastName} />
    <h1> Hello {printName(user)}</h1>
    <h2> This is my react app which I am using to learn react</h2>
    <img src={user.urlOfPicture} width={200}></img>
    <h3>{user.descriptionOfPicture}</h3>
  </div>
);
