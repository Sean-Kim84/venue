import React, { Component } from 'react';

import Zoom from 'react-reveal/Zoom';
import MyButton from '../utils/MyButton';



class Pricing extends Component {

  state = {
    prices: [100, 200, 250],
    positions: ['Balcony', 'Medium', 'Star'],
    desc: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    linkto: ['http://sales/b', 'http://sales/c', 'http://sales/d'],
    delay: [500,0,500]
  }

  showBoxes = () => (
    
    this.state.prices.map((box, i) => (
      <Zoom delay={this.state.delay[i]}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>${this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">
              description
            </div>
            <div className="pricing_buttons">
            <MyButton 
              text="Purchase"
              bck="#ffa800"
              link={this.state.linkto[i]}
            />
            </div>
          </div>
        </div>
      </Zoom>
    ))
  )
  
  render(){
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">
            {this.showBoxes()}
          </div>
        </div>
      </div>
    )
  }
}

export default Pricing;
