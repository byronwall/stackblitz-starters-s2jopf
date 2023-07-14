import * as React from 'react';
import './style.css';

import { ComputerThing } from './ComputerThing';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <ComputerThing initialValue={20} />
      <ComputerThing />
      <ComputerThing />
      <ComputerThing />
      <ComputerThing color="green" />
    </div>
  );
}
