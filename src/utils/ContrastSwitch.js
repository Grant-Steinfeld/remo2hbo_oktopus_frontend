import React, { Component } from 'react';
import contrastIcon from '../images/contrastIcon.png';
import contrastIconWhite from '../images/contrastIcon_white.png';



class ContrastSwitch extends Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
      if(this.state.isToggleOn == true) {
        let elems = [];
        elems = document.getElementById('grid-container').childNodes;
        for (let e of elems) {
            e.style = 'background-color: black;';;
        }
      } else {
        let elems = document.getElementById('grid-container').childNodes;
        for (let e of elems) {
            e.style = 'background-color: white;';;
        }
      }
    }

    render() {
        let imgBlack = <img onClick={this.handleClick} className="contrastSwitch" align="right" src={contrastIcon} />;
        let imgWhite = <img onClick={this.handleClick} className="contrastSwitch" align="right" src={contrastIconWhite} />;
        if(this.state.isToggleOn) {
            return imgBlack;
        } else {
            return imgWhite;
        }
    }
  }

  export default ContrastSwitch;
  