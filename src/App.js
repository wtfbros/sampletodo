import React, { Component } from 'react';
import TODOForm from './TODOForm.js';
import TODOList from './TODOList.js';
// import { ToastContainer } from "react-toastr";
import './App.css';
import {Form,Col, Row, notification, Card, Button} from 'antd'

const openNotification = (type, title, message) => {
  notification[type]({
    message: title,
    description: message,
  })
}

class App extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	TodoItem: {
		    	title: '',
		    	// hours: ' das',
		    	// minutes: ' das',
		    	// day: ' sd',
		    	// month: ' sadsa',
		    	// year: ' 1',
		    	pending: false,
		    	marked: false,
		    	editstate:false,
	    	},
	    	TodoList:[{
	    		title: 'initial',
		    	pending: false,
		    	marked:false,
		    	editstate:false,
		   	}],
	    	Editstate: false
		};
		this.deletebtn = this.deletebtn.bind(this);
		this.deletetarget= this.deletetarget.bind(this);
	    this.ontitleChange = this.ontitleChange.bind(this);
	    // this.onhoursChange = this.onhoursChange.bind(this);
	    // this.onminutesChange = this.onminutesChange.bind(this);
	    // this.ondayChange = this.ondayChange.bind(this);
	    // this.onmonthChange = this.onmonthChange.bind(this);
	    // this.onyearChange = this.onyearChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.printconsole = this.printconsole.bind(this);
	    this.markdone = this.markdone.bind(this);
	    this.marktarget = this.marktarget.bind(this);
	    this.deletemarked = this.deletemarked.bind(this);
	    this.showEdit = this.showEdit.bind(this);
	    this.submitEdit = this.submitEdit.bind(this);
	    this.handleClose = this.handleClose.bind(this);
	  }
	  updatetodo(){
	  	// var newarray = this.state.array2.assign({}, this.state.TodoItem);
	  	// this.set
	  }
	  submitEdit(event){
	  	if(event.key==="Enter"){
	  		if(event.target.value!==''){
		  		let TodoClone = this.state.TodoList;
		  		let index = event.target.dataset.key;
		  		TodoClone[index].editstate = false;
		  		TodoClone[index].title = event.target.value;
		  		this.setState({
		  			TodoList:TodoClone,
		  		});
	  		// console.log(event.target.dataset.key);
	  		} else {
	  			openNotification('warning', 'OMAE!', 'Please make sure all required fields are filled out correctly.');
	  		}
	  	}
	  	// console.log("wow");
	  	// 
	  	// 
	  	
	  }
	  handleClose(){
	  	// console.log("WOW");
	  	document.getElementById("modaltrue").setAttribute("hidden",true);
	  }
	  showEdit(event){
	  	// console.log(event.target.dataset.key);
	  	let index = event.target.dataset.key;
	  	let TodoClone = this.state.TodoList;
	  	TodoClone[index].editstate = true;
	  	this.setState({
	  		TodoList:TodoClone,
	  	});
	  }
	  deletemarked(event){
	    const todos = this.state.TodoList.filter(todo => !todo.marked)
	  	this.setState({
	  		TodoList:todos,
	  	});
	  }
	  markdone(event){
	  	let TodoClone = this.state.TodoList;
	  	// console.log(event.target.dataset.keyf)
	  	// console.log(TodoClone[event.target.dataset.keyf]);
		// TodoClone[event.target.dataset.keyf].pending = "true";
		// TodoClone.indexOf(event.target.dataset.keyf).pending="true";
		let TodoTrue = (TodoClone[event.target.dataset.keyf].pending === true) ? this.markundo(TodoClone,event.target.dataset.keyf) : this.markasdone(TodoClone,event.target.dataset.keyf); 
		this.setState({
	  		TodoList:TodoTrue,
	  	});
	  }
	  marktarget(event){
	  	// console.log(event.target.dataset.key);
	  	let TodoClone = this.state.TodoList;
	  	(TodoClone[event.target.dataset.key].marked===true) ? TodoClone[event.target.dataset.key].marked=false : TodoClone[event.target.dataset.key].marked=true;
	  	this.setState({
	  		TodoList:TodoClone,
	  	});
	  }
	  markasdone(array,index){
	  	// console.log(array[index]);
	  	array[index].pending=true;
	  	return array;
	  }
	  markundo(array,index){
		array[index].pending=false;
		return array;
		// console.log("undo"+index);
	  }
	  ontitleChange(event) {
	    this.setState({TodoItem: {
	    		title:event.target.value,
	    		hours:this.state.TodoItem.hours,
	    		minutes:this.state.TodoItem.minutes,
	    		day:this.state.TodoItem.day,
	    		month:this.state.TodoItem.month,
	    		year:this.state.TodoItem.year,
	    		pending:this.state.TodoItem.pending,
	    	}
		});
	  }
	 //  onhoursChange(event) {
	 //    this.setState({TodoItem: {
	 //    		title:this.state.TodoItem.title,
	 //    		hours:event.target.value,
	 //    		minutes:this.state.TodoItem.minutes,
	 //    		day:this.state.TodoItem.day,
	 //    		month:this.state.TodoItem.month,
	 //    		year:this.state.TodoItem.year,
	 //    		pending:this.state.TodoItem.pending,
	 //    	}
		// });
	 //  }
	 //  onminutesChange(event) {
	 //    this.setState({TodoItem: {
	 //    		title:this.state.TodoItem.title,
	 //    		hours:this.state.TodoItem.hours,
	 //    		minutes:event.target.value,
	 //    		day:this.state.TodoItem.day,
	 //    		month:this.state.TodoItem.month,
	 //    		year:this.state.TodoItem.year,
	 //    		pending:this.state.TodoItem.pending,
	 //    	}
		// });
	 //  }
	 //  ondayChange(event) {
	 //    this.setState({TodoItem: {
	 //    		title:this.state.TodoItem.title,
	 //    		hours:this.state.TodoItem.hours,
	 //    		minutes:this.state.TodoItem.minutes,
	 //    		day:event.target.value,
	 //    		month:this.state.TodoItem.month,
	 //    		year:this.state.TodoItem.year,
	 //    		pending:this.state.TodoItem.pending,
	 //    	}
		// });
	 //  }
	 //  onmonthChange(event) {
	 //    this.setState({TodoItem: {
	 //    		title:this.state.TodoItem.title,
	 //    		hours:this.state.TodoItem.hours,
	 //    		minutes:this.state.TodoItem.minutes,
	 //    		day:this.state.TodoItem.day,
	 //    		month:event.target.value,
	 //    		year:this.state.TodoItem.year,
	 //    		pending:this.state.TodoItem.pending,
	 //    	}
		// });
	 //  }
	 //  onyearChange(event) {
	 //    this.setState({TodoItem: {
	 //    		title:this.state.TodoItem.title,
	 //    		hours:this.state.TodoItem.hours,
	 //    		minutes:this.state.TodoItem.minutes,
	 //    		day:this.state.TodoItem.day,
	 //    		month:this.state.TodoItem.month,
	 //    		year:event.target.value,
	 //    		pending:this.state.TodoItem.pending,
	 //    	}
		// });
	 //  }
	  printconsole(event){
	  	if(this.state.TodoItem.title!==''){
		  	let TodoClone = this.state.TodoList.slice(0);
		  	TodoClone.push(this.state.TodoItem)
		  	this.setState({
		  		TodoList:TodoClone,
		  		TodoItem: {
		    		// title:this.state.TodoItem.title,
		    		// hours:this.state.TodoItem.hours,
		    		// minutes:this.state.TodoItem.minutes,
		    		// day:this.state.TodoItem.day,
		    		// month:this.state.TodoItem.month,
		    		title:this.state.TodoItem.title,
		    		pending:false,
		    		marked:false,
		    		editstate:false,
		    	}
		  	});
		  	// console.log(TodoClone);
		  } else {
		  	// alert("Title is Blank!");
		  	document.getElementById("modaltrue").removeAttribute("hidden");
		  }
	  	event.preventDefault();
	  }
	  deletebtn(event) {
	  	// console.log("DELET");
	    let TodoClone = this.state.TodoList.slice(0,-1);
	  	this.setState({
	  		TodoList:TodoClone,
	  	});
	  	// console.log(TodoClone);
	  	event.preventDefault();
  	  }
  	  deletetarget(event) {
		let TodoClone = this.state.TodoList;
		TodoClone.splice(event.target.dataset.key, 1);
		this.setState({
	  		TodoList:TodoClone,
	  	});
  	  }
	  handleSubmit(event) {
	    // console.log(this.state.TodoList);
	    event.preventDefault();
  	  }
  render() {
    return (
      <div className="App">
        <TODOForm 
        	state={this.state} 
        	ontitleChange={this.ontitleChange} 
        	onhoursChange={this.onhoursChange}
        	onminutesChange={this.onminutesChange}
        	ondayChange={this.ondayChange}
        	onmonthChange={this.onmonthChange}
        	onyearChange={this.onyearChange}
        	handleSubmit={this.handleSubmit}
        	printconsole={this.printconsole}
        	deletebtn={this.deletebtn}
        	deletemarked={this.deletemarked}
        	handleClose={this.handleClose}

        />
        <TODOList 
        	state={this.state} 
        	deletetarget={this.deletetarget}
        	markdone={this.markdone}
        	marktarget={this.marktarget}
        	showEdit={this.showEdit}
        	submitEdit={this.submitEdit}
        />
      </div>
    );
  }
}

export default App;
