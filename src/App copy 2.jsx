import { useState } from 'react';
import './App.css';
import PrimaryButton from './components/PrimaryButton';
import CounterButton from './components/CounterButton';

function getStr() {
  return 'string123';
}

export default function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  console.log('App rendered');

  const str = 'string';

  const items = [1, 2, 3, 4];

  const spans = items.map((item) => (
    <>
      <span>{`${item} postfix`}</span>
      <br />
    </>
  ));

  return (
    <div>
      {[...Array(4)].map((_, index) => (
        <PrimaryButton count={index + 1} style={{ width: 50 * (index + 1) }} />
      ))}
      hello react
      <p />
      {`asd ${str}`}
      {str === '123' ? 'sasdas' : 'asdasdasd'}
      <p />
      {str === '123' ? getStr() : 'asdasdasd'}
      {spans}
      <CounterButton count={count1} setCount={setCount1} />
      <CounterButton count={count2} setCount={setCount2} />
    </div>
  );
}
