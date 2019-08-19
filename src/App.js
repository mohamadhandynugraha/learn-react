import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      members: []
    }
  }

  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(response);
    const users = await response.json();
    console.log(users);
    this.setState({ members: users });
  }

  render() {
    return (
      <div className="App">
      {
        this.state.members.map(member => <p key={member.id}> { member.name } </p>)
      }
    </div>
    );
  }
}

export default App;
