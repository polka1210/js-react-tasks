import React from 'react';

// BEGIN (write your solution here)
function MyForm() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [city, setCity] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [acceptRules, setAcceptRules] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleBack = () => {
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={handleBack}>
          Back
        </button>
        <table className="table">
          <tbody>
            <tr>
              <td>acceptRules</td>
              <td>{String(acceptRules)}</td>
            </tr>
            <tr>
              <td>address</td>
              <td>{address}</td>
            </tr>
            <tr>
              <td>city</td>
              <td>{city}</td>
            </tr>
            <tr>
              <td>country</td>
              <td>{country}</td>
            </tr>
            <tr>
              <td>email</td>
              <td>{email}</td>
            </tr>
            <tr>
              <td>password</td>
              <td>{password}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <form name="myForm" onSubmit={handleSubmit}>
      <div className="col-md-6 mb-3">
        <label htmlFor="email" className="col-form-label">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="password" className="col-form-label">Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="address" className="col-form-label">Address</label>
        <textarea
          className="form-control"
          name="address"
          id="address"
          placeholder="1234 Main St"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="city" className="col-form-label">City</label>
        <input
          type="text"
          className="form-control"
          name="city"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="country" className="col-form-label">Country</label>
        <select
          id="country"
          name="country"
          className="form-control"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="">Choose</option>
          <option value="argentina">Argentina</option>
          <option value="russia">Russia</option>
          <option value="china">China</option>
        </select>
      </div>
      <div className="col-md-6 mb-3">
        <div className="form-check">
          <label className="form-check-label" htmlFor="rules">
            <input
              id="rules"
              type="checkbox"
              name="acceptRules"
              className="form-check-input"
              checked={acceptRules}
              onChange={(e) => setAcceptRules(e.target.checked)}
            />
            Accept Rules
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Sign in</button>
    </form>
  );
}

export default MyForm;
// END
