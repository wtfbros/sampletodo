import React, { Component } from 'react';
import TODOForm from './TODOForm.js';
import logo from './logo.svg';
import { Label,Button,FormGroup, Form,FormControl,Checkbox, ListGroup,ListGroupItem } from 'react-bootstrap';
import './App.css';

class TODOList extends Component {
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
  	console.log(this.props.state.TodoList)
  	
    return (
      <div className="TODOList">
      	<ListGroup>
      		{
      			// let  Temp = (this.props.TodoList==null) ? this.state.Placeholder : this.props.TodoList;
      			this.props.state.TodoList.map((todo, index)=>(

      				<ListGroupItem key={index}>
	      				<div class="container">
		      				<div class="row justify-content-md-center">
			      				{/*<input type="checkbox" data-key={index} {(todo.marked===true) ? "checked" : " "} onChange={this.props.marktarget}/>*/}
			      				<div class="col-md-1" >
			      					<Button bsSize="large" bsStyle="warning" type="button" onClick={this.props.deletetarget} data-key={index}>X</Button>
			      				</div>
			      				<div class="col-md-3">
			      					<Checkbox type="checkbox" data-key={index} checked={todo.marked} onChange={this.props.marktarget}/>
			      				</div>
			      				<div class="col-md-3">
			      					<Label bsStyle="info" >Title:</Label><br/>
			      					<h4 data-key={index} onDoubleClick={this.props.showEdit} style={{display:todo.editstate ? 'none' : ''}}> <Label data-key={index} onDoubleClick={this.props.showEdit} style={{display:todo.editstate ? 'none' : ''}} bsStyle="primary" > {(todo.pending===true) ? <s>{todo.title}</s> : todo.title}</Label></h4>
			      					<FormControl 
				      					type="text" 
				      					name=" " 
				      					data-key={index}
				      					defaultValue={todo.title}
				      					style={{display:todo.editstate ? '' : 'none'}}
				      					onKeyPress={this.props.submitEdit}
				      				/>
				      				<FormControl.Feedback />
			      				</div>
			      				<div class="col-md-5">
				      				<Button bsSize="large" bsStyle="primary" type="button" onClick={this.props.markdone} data-keyf={index}>{(todo.pending===true) ? "Undo" : "Done"}</Button>
				      			</div>
			      			</div>
		      			</div>
      				</ListGroupItem>
      			))
      		}
      		{/*<li>Title: {this.props.state.title}</li>
        	<li>Hours: {this.props.state.hours}</li>
        	<li>Minutes: {this.props.state.minutes}</li>
        	<li>Day: {this.props.state.day}</li>
        	<li>Months: {this.props.state.month}</li>
        	<li>Years: {this.props.state.year}</li>*/}
      	</ListGroup>
      </div>
    );
  }
}

export default TODOList;
