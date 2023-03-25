import React from 'react';

export default class Form extends React.Component {
  render() {
    return (
      <form className="form">
        <input type="text" name="title" className="input_title" />
        <input type="date" name="date" id="date" className="input_date" />
        <select name="platform" id="select"></select>
        <input type="checkbox" name="genre" id="genre" />
        <input type="radio" name="status" id="status" />
        <input type="file" name="cover" id="cover" />
      </form>
    );
  }
}
