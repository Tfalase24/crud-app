import React, { useState } from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import User from "./interfaces/User";

function App(): JSX.Element {
  const [clicks, setClicks] = useState(0);
  return (
    <div>
      <Welcome firstName={user.firstName} lastName={user.lastName} />
      <h1> Hello {printName(user)}</h1>
      <h2> This is my react app which I am using to learn react</h2>
      <img src={user.urlOfPicture} width={200} alt="Island Boys"></img>
      <h3>{user.descriptionOfPicture}</h3>
      <h4>{button}</h4>
      <button
        onClick={() => {
          setClicks(clicks + 1);
        }}
      >
        {" "}
        This is a button to literally just count how many Cherry B's have been
        sipped on. Current {clicks} many Cherry B's
      </button>
    </div>
  );
}

export default App;

function printName(user: User): string {
  return user.firstName + " " + user.lastName;
}

function screamFunction(e: React.MouseEvent<HTMLButtonElement>): void {
  // e.preventDefault();
  console.log("Reeeeeeeeek!!!!");
}

const user: User = {
  firstName: "Adetito",
  lastName: "Falase",
  urlOfPicture:
    "https://media.euobserver.com/75ba88da8a99cadb376a759df8710279.jpg",
  descriptionOfPicture: "Queen Lizzie and I sipping Cherry B's... Four minimum",
};

const button: JSX.Element = (
  <div>
    <button onClick={screamFunction}> Click here</button>
  </div>
);
