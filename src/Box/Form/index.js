import React from 'react';

export default function Form({fn}) {
  function onSubmitForm(event) {
    event.preventDefault();
    const values = Object.values(event.target).reduce(
      (acc, input) =>
        !input.name
          ? acc
          : {
              ...acc,
              [input.name]: input.value,
            },
      {}
    );
    event.target.reset();
    fn(values);
  }

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input name="name" placeholder="what do u have to do?" id="inputAdd" type="text"></input>
        <input id="submit" type="submit" value="Submit" />
      </form>
    </div>
  );
}
