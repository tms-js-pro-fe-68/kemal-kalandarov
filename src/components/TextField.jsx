/* eslint-disable jsx-a11y/label-has-associated-control */

export default function TextField({ label, error, ...otherProps }) {
  return (
    <>
      <label htmlFor="email">{label}</label>
      <input id="email" name="email" type="email" {...otherProps} />
      {!!error && <span style={{ color: 'red' }}>{error}</span>}
    </>
  );
}
