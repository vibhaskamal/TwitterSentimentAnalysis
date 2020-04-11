import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnalyzeButton from './components/AnalyzeButtonComponent.js'
import TweeterUserInputClass from './components/TweeterUserInput.js'

class UserInterface extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tweeter: undefined
    };

    this.handleTweeterValueChange = this.handleTweeterValueChange.bind(this);

  }

  handleTweeterValueChange(event) {
    this.setState({tweeter: event.target.value});
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
        
        <TweeterUserInputClass inputValue={this.state.tweeter} onChange={this.handleTweeterValueChange}  />
        
        <br></br>
        
        <div class="text-center">
          <AnalyzeButton />  
        </div>
      
      </div>
    );
  }
}



ReactDOM.render(
  <UserInterface />,
  document.getElementById('root')
);


