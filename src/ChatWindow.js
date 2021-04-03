import React, {Component} from 'react';
import MessageHistory from './MessageHistory';
import AddMessage from './AddMessage';

class ChatWindow extends Component {  
  
  addNewMessage = message => {
    //The callback is getting called.    
    this.props.addNewMessage(this.props.user, message);
  };

  render() {
    const user = this.props.user;
    const messages = this.props.messages;
    
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

export default ChatWindow;