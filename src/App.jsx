import { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState([]);

  const [isDisabled, setIsDisabled] = useState(true);

  const handleSubmit = () => {
    setErrors([]);
    if (!email) {
      setErrors((prev) => [...prev, 'email']);
    }
    if (!password) {
      setErrors((prev) => [...prev, 'password']);
    }

    if (errors.length) return;

    fetch('https://tms-js-pro-back-end.herokuapp.com/api/users/signin', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        sessionStorage.token = data.token;
      });
  };

  useEffect(() => {
    setIsDisabled(!!errors.length);
  }, [errors]);

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {!sessionStorage.token ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 16,
          }}
        >
          <input
            required
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors((prev) => prev.filter((error) => error !== 'email'));
              if (!e.target.value) setErrors((prev) => [...prev, 'email']);
            }}
          />
          <input
            required
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors((prev) => prev.filter((error) => error !== 'password'));
              if (!e.target.value) setErrors((prev) => [...prev, 'password']);
            }}
          />
          {!!errors.length && (
            <span style={{ color: 'red' }}>{`${errors.join(
              ' and ',
            )} required`}</span>
          )}
          <button type="button" onClick={handleSubmit} disabled={isDisabled}>
            sign in
          </button>
        </div>
      ) : (
        <button type="button" onClick={(e) => (sessionStorage.token = '')}>
          sign out
        </button>
      )}
    </div>
  );
}
