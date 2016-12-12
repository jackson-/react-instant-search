import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InstantBox from './components/InstantBox';

class App extends Component {
  render() {
    var tableData = [
      {
          name:'Paul Shan',
          roll: '001'
      },
      {
          name:'John Doe',
          roll: '002'
      },
      {
          name:'Sachin Tendulkar',
          roll: '003'
      }];

    return (
      <InstantBox data={tableData}/>
    );
  }
}

export default App;
