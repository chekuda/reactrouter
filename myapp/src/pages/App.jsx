import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
import Carousel from '../components/Carousel';

import nicolasFist from '../static/nicolasCage.jpg';
import nicolasSecond from '../static/nicolasCage2.jpg';
import phillFirst from '../static/phillMurray.jpg';
import phillSecond from '../static/phillMurray2.jpg';

const SLICE_WIDTH = 400;

class App extends Component {
  componentWillMount(){
    this.arrayOfImages = [
    nicolasFist,
    nicolasSecond,
    phillFirst,
    phillSecond];
    this.state = { slicePosition: 0 };
  }
  componentDidMount(){
    document.querySelectorAll('.moveSlider')
      .forEach(node => node.addEventListener('click', ele => this.moveSlider(ele)));
    document.querySelectorAll('.dotsRow .dot')
      .forEach(node => node.addEventListener('click', ele => this.addActiveClass(ele)));
    document.querySelectorAll('.smallGroupImages .smallSlice')
      .forEach(node => node.addEventListener('click', ele => this.addActiveClass(ele)));
  }
  moveSlider( {target} = {} ){
    let containerStyle = document.querySelector('.carousel-container').style;
    let directionToMove = 1;
    let amountOfPixels = 0;

    if (target){
      directionToMove = target.classList.contains('goleft') ? -1 : 1;
      if(this.state.slicePosition === (this.arrayOfImages.length -1) && directionToMove === 1){
        this.setState( {slicePosition:0} );
      } else if (this.state.slicePosition === 0 && directionToMove === -1){
        this.setState( {slicePosition: (this.arrayOfImages.length -1)} )
        amountOfPixels = this.state.slicePosition * SLICE_WIDTH;
      } else {
        this.setState( {slicePosition: this.state.slicePosition + directionToMove} )
        amountOfPixels = this.state.slicePosition * SLICE_WIDTH;
      }
    } else {
      amountOfPixels = SLICE_WIDTH * this.state.slicePosition;
    }
    containerStyle.left = `-${amountOfPixels}px`;
  }
  addActiveClass( {target} ) {
    this.setState( {slicePosition: parseInt(target.className.match(/[0-9]+/g))} );

    this.moveSlider();
  }
  render() {
    return (
      <div className='App'>
      <Header/>
      <Carousel arrayOfImages={this.arrayOfImages} slicePosition={this.state.slicePosition}/>
      </div>
    );
  }
}

export default App;
