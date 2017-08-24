import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Main extends Component {
  render() {
    return (
      <main>
        Hello world
      </main>
    );
  }
}

ReactDOM.render(
  <Main/>, document.getElementById('react-ethereal-boilerplate')
);
