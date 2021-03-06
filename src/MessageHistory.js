import React from 'react';
import PropTypes from 'prop-types';

const MessageHistory = props => {
  const {user, messages} = props;
    console.log('ASFD');
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

MessageHistory.propTypes = {
  messages: PropTypes.array.isRequired,
  user: PropTypes.string.isRequired
}

export default MessageHistory;