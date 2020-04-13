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
      heading_value: 'Twitter Sentiment Analyzer',
      analysis_data: undefined
    };

    this.handleTweeterValueChange = this.handleTweeterValueChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleTweeterValueChange(event) {
    this.setState({tweeter: event.target.value});
  }

  async onClick(){
    let url = 'http://localhost:5000/analyze'
    let response = await fetch(`${url}?values=${this.state.tweeter}`);
      // .then((response) => response.json())
      // .then((response) => console.log(response))
      // .then((response) => this.setState({analysis_data: response}))

    let data = await response.json();
    console.log('returned data: ', data);

    // const json_data = await response_data.json();

    // this.setState({analysis_data: json_data});
    // if (response_data){
    //   console.log('analysis data: ', this.state.analysis_data);
    // }
    
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


