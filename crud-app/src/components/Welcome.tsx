import React from "react";
import User from "../interfaces/User";

function Welcome(props: User): JSX.Element {
  return (
    <div>
      Welcome {props.firstName} {props.lastName}
    </div>
  );
}

export default Welcome;
