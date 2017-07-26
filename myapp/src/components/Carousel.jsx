import React, { Component } from 'react';
import './Carousel.css';

class Carousel extends Component{
  render() {
    console.log(this.props);
    return(
      <div className='Carousel'>
      <div className='carousel-container'>
      {this.props.arrayOfImages.map((image,index) =>
        <img key={index} className={`slice ${index}`} src={image}/>)
      }
      </div>
      <button className='moveSlider goleft'>&lt;</button>
      <button className='moveSlider goright'>&gt;</button>
      <div className='dotsRow'>
        {this.props.arrayOfImages.map((image,index) =>
          this.props.slicePosition === index
          ? <div key={index+1} className={`dot ${index} activeDot`}></div>
          : <div key={index+1} className={`dot ${index}`}></div>)
        }
      </div>
      <div className='smallGroupImages'>
        {this.props.arrayOfImages.map((image,index) =>
          this.props.slicePosition === index
          ? <img key={index} className={`smallSlice ${index} activeSmallSlice`} src={image}/>
          : <img key={index} className={`smallSlice ${index}`} src={image}/>)
        }
      </div>
      </div>
    )
  }
}

export default Carousel;


