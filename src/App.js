import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

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
         
        {/*Amy*/}
        <ChatWindow key= {users[0].username} user= {users[0].username} messages= {this.state.messages} addNewMessage= {this.addNewMessage} />
        
        {/*John*/}
        <ChatWindow key= {users[1].username} user= {users[1].username} messages= {this.state.messages} addNewMessage= {this.addNewMessage} />

        </div>
      </div>
    );
  }
}

export default App;
