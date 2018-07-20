import React, { Component } from 'react';
import TODOForm from './TODOForm.js';
import TODOList from './TODOList.js';
import logo from './logo.svg';
import './App.css';

class InputEdit extends Component {
	constructor(props) {
	    super(props);
	    this.state = [{
	    	placeholder: {
		    	title: ' ',
		    	hours: ' ',
		    	minutes: ' ',
		    	day: ' ',
		    	month: ' ',
		    	year: ' '
	    	},
		}];

	}
  render() {
  	console.log(this.props.index);
  	
    return (
      {/*<input 
        type="text" 
          name=" " 
          data-key={index}
          defaultValue={todoitem.title}
      />*/}
    );
  }
}

export default InputEdit;
