import * as React from 'react';

export function ComputerThing(props: any) {
  const [value, setValue] = React.useState(props.initialValue ?? 500);

  function changeHandler(evt: any) {
    console.log(evt.target.value);

    setValue(Number.parseFloat(evt.target.value));
  }

  // arrow function assigned to a constant
  const changeHandler2 = (evt: any) => {
    console.log(evt.target.value);

    setValue(Number.parseFloat(evt.target.value));
  };

  const objb = {
    b: '100',
    c: '200',
  };

  const obj = {
    a: '2000',
    ...objb, // spread operator
  };

  // destructuring
  const { b } = obj;

  console.log('a', b);

  console.log(obj);

  const answer = value * 100;
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(evt: any) => {
          // inline arrow function
          console.log(evt.target.value);

          setValue(Number.parseFloat(evt.target.value));
        }}
        style={{ backgroundColor: props.color ?? 'red' }}
      />

      <h2>
        answer = <span>{answer}</span>
      </h2>
    </div>
  );
}
