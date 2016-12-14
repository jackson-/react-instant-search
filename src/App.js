import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InstantBox from './components/InstantBox';

class App extends Component {
  render() {
    var tableData = [
      {
          name:'Paul Shan',
          roll: '001',
          tags:['sports', 'music', 'cooking']
      },
      {
          name:'John Doe',
          roll: '002',
          tags:['sports', 'design', 'science']
      },
      {
          name:'Sachin Tendulkar',
          roll: '003',
          tags:['music', 'science']
      }];

    return (
      <InstantBox data={tableData}/>
    );
  }
}

export default App;
