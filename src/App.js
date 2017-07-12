import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    const helloWorld = 'Welcome to Hackernoon Clone';

    function formatName(user) {
      return user.firstName + ' ' + user.lastName;
    }

    const user = {
      "firstName": "Aakash",
      "lastName": "Thapa",
    };

    return (
      <div className="App">                  
        <h1>{helloWorld}</h1>
        <h2>Who is doing this?</h2>
        <h4>This is being done by {formatName(user)}!</h4>
      </div>
    );
  }
}

export default App;
