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
    this.onClick = this.onClick.bind(this);
  }

  handleTweeterValueChange(event) {
    this.setState({tweeter: event.target.value});
  }

  onClick(){
    console.log(this.state.tweeter)
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
        
        <TweeterUserInputClass 
          inputValue={this.state.tweeter} 
          onChange={this.handleTweeterValueChange}  
        />
        
        <br></br>
        
        <div class="text-center">
          <AnalyzeButton 
            onClick = {this.onClick}
            tweeter_name = {this.state.tweeter}
          />  
        </div>
      
      </div>
    );
  }
}



ReactDOM.render(
  <UserInterface />,
  document.getElementById('root')
);


