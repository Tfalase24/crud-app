import React from "react";
import listItem from "../interfaces/listItemInterface";

const Person = (props: listItem) => {
  return (
    <div>
      <h3> My name is {props.name}</h3>
    </div>
  );
};

export default Person;
