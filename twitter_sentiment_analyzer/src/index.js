import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ConsoleLogButton from './components/testButton.js'
import TweeterUserInput from './components/TweeterUserInput.js'


class UserInterface extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tweeter: ''
    };
  }

  render() {
    return (
      <div>
        <header>
          <h1 class="text-center">
            Twitter Sentiment Analyzer
          </h1>
        </header>
        <br></br>
        <br></br>
        <TweeterUserInput />
        <ConsoleLogButton />  
      </div>
    );
  }
}



ReactDOM.render(
  <UserInterface />,
  document.getElementById('root')
);


