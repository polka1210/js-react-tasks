import axios from 'axios';
import React from 'react';

// BEGIN (write your solution here)
class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      items: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  async handleChange(e) {
    const value = e.target.value;
    this.setState({ value });

    if (value === '') {
      this.setState({ items: [] });
      return;
    }

    const res = await axios.get('/countries', { params: { term: value } });
    this.setState({ items: res.data });
  }

  render() {
    const { value, items } = this.state;

    return (
      <div>
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Country"
            value={value}
            onChange={this.handleChange}
          />
        </form>
        {items.length > 0 && (
          <ul>
            {items.map((country) => (
              <li key={country}>{country}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Autocomplete;
// END
