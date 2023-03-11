import React from "react";
import StaffCredentials from "../interfaces/staffCredentials";

export const DisplayEmail = (props: StaffCredentials) => {
  return props.firstName && props.lastName ? (
    <div>
      <h3>
        {props.firstName}.{props.lastName}@gmail.com
      </h3>
    </div>
  ) : (
    <div></div>
  );
};
