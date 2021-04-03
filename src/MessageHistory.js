import React, {Component} from 'react';

class MessageHistory extends Component {

  render() {
    const messages = this.props.messages;
    const user = this.props.user
    
  	return(
    	 <ul className="message-list">
            {messages.map((message, index) => (
              <li
                key={index}
                className={
                  message.username === user ? 'message sender' : 'message recipient'
                }
              >
                <p>{`${message.username}: ${message.text}`}</p>  				
              </li>
            ))}
         </ul>
    );
  }
}

export default MessageHistory;