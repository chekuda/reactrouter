import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import anime from 'animejs'

class App extends Component {
  componentDidMount(){
    document.querySelector('.square')
      .addEventListener('click', (e)=> console.log('DIV'));
      document.querySelector('.bu')
      .addEventListener('click', (e)=> console.log('BU'));
  }
  moveSquare(){
    console.log('DONE');
  }
  render() {
    return (
      <div className='App'>
      <Header/>
      <div className='line'>
        <div className='square el' style={{width: 20}}></div>
        <button className='bu'>testing</button>
      </div>
      </div>
    );
  }
}

export default App;
