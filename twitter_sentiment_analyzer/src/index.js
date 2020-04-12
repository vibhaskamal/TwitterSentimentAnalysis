import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnalyzeButton from './components/AnalyzeButtonComponent.js'
import TweeterUserInputClass from './components/TweeterUserInput.js'
import PageHeading from './components/HeadingComponent.js'

class UserInterface extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tweeter: undefined,
      heading_value: 'Twitter Sentiment Analyzer'
    };

    this.handleTweeterValueChange = this.handleTweeterValueChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleTweeterValueChange(event) {
    this.setState({tweeter: event.target.value});
  }

  onClick(){
    console.log(this.state.tweeter)
    fetch('http://127.0.0.1:5000/')
      .then((response) => {
        console.log('sent')
        // return response.json();
      });
      // .then((data) => {
      //   console.log(data);
      // });
  }
  
  render() {
    return (
      <div>
        <PageHeading heading = {this.state.heading_value} />

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


