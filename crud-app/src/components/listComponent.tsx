import React from "react";
import listItem from "../interfaces/listItemInterface";
import Person from "./Person";

export const ListComponent = () => {
  const listOfObjects: listItem[] = [
    { id: 1, name: "Tito" },
    { id: 2, name: "Julia" },
  ];
  return (
    <div>
      <ul>
        {listOfObjects.map((item) => (
          <Person id={item.id} name={item.name} />
        ))}
      </ul>
    </div>
  );
};
