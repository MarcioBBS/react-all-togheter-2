import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow';

class App extends Component {
  
  state = {
	messages: []
  };

  addNewMessage = (username, message) => {
      this.setState(prevState => ({
   		   	messages: prevState.messages.concat({['username']: username, ['text']: message})
      }));
  }  

  render() {
    
    const users = [{ username: 'Julian' }, { username: 'Leah' }];
	    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">               

        {users.map(user => (
          <ChatWindow key= {user.username} user= {user.username} messages= {this.state.messages} addNewMessage= {this.addNewMessage} />
        ))}

        </div>
      </div>
    );
  }
}

export default App;
