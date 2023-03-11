import React from "react";
import listItem from "../interfaces/listItemInterface";

const Person = (props: listItem) => {
  return (
    <div>
      <h1> My name is {props.name}</h1>
    </div>
  );
};

export default Person;
