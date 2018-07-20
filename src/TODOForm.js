import React, { Component } from 'react';
import { Button,FormGroup, Form,FormControl,Modal } from 'react-bootstrap';
import './App.css';

class TODOForm extends Component {
  

  render() {
    return (
      <div className="TODOForm">
      	<div>
	      	<FormGroup>
		      	<div class="container">
			      	<div class="row justify-content-md-center">
			      		<div class="col-md-3">
						</div>
		         		<div class="col-md-6 row justify-content-md-center">
							<h4>Title: </h4>
		         			<FormControl type="text" name="title" value={this.props.state.title} onChange={this.props.ontitleChange} /> 
		        		</div>
		        		<div class="col-md-3" />
		        	</div>
		        </div> 
		         {/*<label>
		         	Hours:<input type="text" name="hours" value={this.props.state.hours} onChange={this.props.onhoursChange}/>
		         </label><br />
		         <label>
		         	Minutes:<input type="text" name="minutes" value={this.props.state.minutes} onChange={this.props.onminutesChange}/>
		         </label><br />
		         <label>
		         	Day:<input type="text" name="day" value={this.props.state.day} onChange={this.props.ondayChange}/>
		         </label><br />
		         <label>
		         	Month:<input type="text" name="month" value={this.props.state.month} onChange={this.props.onmonthChange}/>
		         </label><br />
		         <label>
		         	Year:<input type="text" name="year" value={this.props.state.title} onChange={this.props.onyearChange}/>
		         </label><br />*/}
		         <Button type="button" value="submit" bsStyle="danger" onClick={this.props.printconsole}>SUBMIT </Button>
		         <Button bsStyle="warning" type="button" name="add" onClick={this.props.deletemarked}> DELETE MARKED</Button>
		         {/*<button type="button" name="delet" onClick={this.props.deletebtn}> DELET</button>*/}
	        </FormGroup>
        </div>
        <div class="container">
        	<div class="row justify-content-md-center">
        		<div class="col-md-4" />
		        <div className="static-modal" class="col-md-4" id="modaltrue" hidden>
				  <Modal.Dialog>
				    {/*<Modal.Header>
				      <Modal.Title>Modal title</Modal.Title>
				    </Modal.Header>*/}

				    <Modal.Body>
				    	Title is Empty <br/><br/><br/><br/>
				    	<Button bsStyle="danger" id="bottom-right" bsSize="small" onClick={this.props.handleClose}>Close</Button>

				    </Modal.Body>

				    {/*<Modal.Footer>
				      <Button bsSize="small" onClick={this.props.handleClose}>Close</Button>
				    </Modal.Footer>*/}
				  </Modal.Dialog>
				</div>
				<div class="col-md-4" />
			</div>
		</div>
      </div>
    );
  }
}

export default TODOForm;
