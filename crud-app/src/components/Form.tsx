import React, { FormEvent } from "react";

export const Form = () => {
  function handleForm(e: FormEvent) {
    e.preventDefault();
    console.log("You just clicked submit");
  }
  return (
    <div>
      <form onSubmit={handleForm}>
        <button> Click here to submit a form </button>
      </form>
    </div>
  );
};
