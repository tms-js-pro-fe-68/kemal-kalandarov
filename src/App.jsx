import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

/* 

200 - OK
204 - OK (empty)
30x - redirect
400 - Invalid request
401/403 - unauthorized access/forbidden
404 - Not found
503 - server unavailable
500 - Server Error

*/

export default function App() {
  const [count, setCount] = useState(0);

  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('1');

  const [catFacts, setCatFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const createRestaurant = () => {
    fetch('https://cat-fact.herokuapp.com/facts', {
      method: 'POST',
      body: JSON.stringify({
        name: 'McDonalds',
        type: 'fast-food',
        text: '',
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setCatFacts(data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setErrorMessage(null);
    setIsLoading(true);
    fetch('https://cat-fact.herokuapp.com/facts')
      .then((response) => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => setCatFacts(data))
      .catch((error) => setErrorMessage(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    console.log('asdasd');
  }, [count]);

  console.log(selectValue);

  return (
    <div className="App" a="b">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React! in branch</p>
        <p>{isLoading && 'Loading...'}</p>
        <p>{errorMessage}</p>
        <ul style={{ margin: 16 }}>
          {catFacts.map(({ _id: id, text }) => (
            <li
              style={{
                listStyleType: 'none',
                padding: 16,
                marginBottom: 16,
                border: '1px solid white',
              }}
              key={id}
            >
              {text}
            </li>
          ))}
        </ul>
        <p>
          <button
            type="button"
            onClick={() => setCount((prevState) => prevState + 1)}
          >
            count is: {count}
          </button>
        </p>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <select
          value={selectValue}
          onChange={(e) => setSelectValue(e.target.value)}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}
