import React, {Component} from 'react';
import MessageHistory from './MessageHistory';
import AddMessage from './AddMessage';
import PropTypes from 'prop-types';

class ChatWindow extends Component {  
  
  addNewMessage = message => {
    //The callback is getting called.    
    this.props.addNewMessage(this.props.user, message);
  };

  render() {    
    const {user, messages} = this.props
    
  	return (
    	 <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{user}</div>
		      	<MessageHistory messages= {messages} user= {user}/>
            <AddMessage addNewMessage= {this.addNewMessage}/>
         </div>
    );
  }
};

ChatWindow.propTypes = {
  addNewMessage: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired
};

export default ChatWindow;