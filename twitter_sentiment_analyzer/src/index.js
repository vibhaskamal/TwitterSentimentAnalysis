import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnalyzeButton from './components/AnalyzeButtonComponent.js'
import TweeterUserInputClass from './components/TweeterUserInput.js'
import PageHeading from './components/HeadingComponent.js'
import GraphicVisualizer from './components/GraphicVisualizer.js';

class UserInterface extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tweeter: undefined,
      heading_value: 'Twitter Sentiment Analyzer',
      analysis_data: undefined,
      display_result: false
    };

    this.handleTweeterValueChange = this.handleTweeterValueChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleTweeterValueChange(event) {
    this.setState({tweeter: event.target.value});
  }

  async onClick(){
    let url = 'http://localhost:5000/analyze';
    let response = await fetch(`${url}?values=${this.state.tweeter}`);
    let data = await response.json();
    this.setState({
      analysis_data: data,
      display_result: !this.state.display_result
    });
    console.log('state data: ', this.state.analysis_data);    
    // if (this.state.analysis_data){
    //   return <GraphicVisualizer data={this.state.analysis_data} />
    // }
}
  
  render() {
    let result = null;

    if (this.state.display_result) {
      result = (
        <div>
          <GraphicVisualizer />
        </div>
      )
    }
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

        {/* {this.onClick()} */}
        {result}
      
      </div>
    );
  }
}



ReactDOM.render(
  <UserInterface />,
  document.getElementById('root')
);


