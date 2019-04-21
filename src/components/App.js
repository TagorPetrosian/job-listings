import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Side from './Side';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="m8">
        <Header />
        <div className="main">
          <Main />
          <Side />
        </div>
      </div>
    );
  }
}
