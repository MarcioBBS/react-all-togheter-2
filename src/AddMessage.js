import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddMessage extends Component {
  
  state = {
  	text: ''
  };
  
  handleChange = event => {
  	this.setState({ text: event.target.value });
  };

 handleInputChange = event => {
    const { value } = event.target;

    this.setState(() => ({
      message: value,
    }));
  };

  addNewMessage = event => {
    event.preventDefault();
    this.props.addNewMessage(this.state.text);       
  };

  isDisabled = () => {
    return this.state.text === '';
  };
	
  render() {
    
  	return(
    	<div>
           <form className= "input-group" onSubmit={this.addNewMessage}>
              <input type= "text" 
         	  	  className= "form-control" 
         		  placeholder= "Enter your message..." 
         		  value= {this.state.text}
        		  onChange= {this.handleChange}
         	  />
              <div className="input-group-append">
                 <button className="btn submit-button" disabled={this.isDisabled()}> 
                    SEND
                 </button> 
              </div>
           </form>
        </div>
    )
  }
};

AddMessage.propTypes = {
  addNewMessage: PropTypes.func.isRequired
}
  
export default AddMessage;