import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  const navigateToLogin = () => navigate('/login', { replace: true });

  useEffect(() => {
    if (!sessionStorage.token) {
      navigateToLogin();
      return;
    }

    fetch('https://tms-js-pro-back-end.herokuapp.com/api/todos', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token ${sessionStorage.token}`,
      },
    })
      .then((response) => response.json())
      .then(setTodos);
  }, []);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          height: 40,
          background: 'blue',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 4,
        }}
      >
        <h1 style={{ color: 'white' }}>Home Page</h1>

        <button
          type="button"
          onClick={() => {
            sessionStorage.token = '';
            sessionStorage.email = '';
            navigateToLogin();
          }}
        >
          sign out from {sessionStorage.email}
        </button>
      </div>
      <ul style={{ paddingInlineStart: '8px', padding: 8 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ listStyleType: 'none', height: 40 }}>
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
              checked={todo.done}
              readOnly
            />
            <label htmlFor="vehicle1">{todo.description}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
