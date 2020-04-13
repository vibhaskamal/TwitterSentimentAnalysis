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

    // let temp_data = this.state.tweeter
    var temp_data = {
      name: this.state.tweeter
    };

    
    // fetch('http://127.0.0.1:5000/')
    //   .then((response) => {
    //     console.log('sent from JS file')
    //     console.log(response)
    //     // return response.json();  
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   });

    fetch('http://localhost:5000/', {
      method: 'GET',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      // .then(result=>result)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .then((response) => console.log('Try'))
      // .then(result=>result.json())
      // .then((result) => { // responseData = undefined
      //     console.log(result.json());
      //  });

      // .then(item=>console.log(item));
      // .catch(e=>{
      //   console.log(e);
      //   return e;
      // }
      // );

    // fetch('http://127.0.0.1:5000/', {
    //     method: 'get',
    //     dataType: 'json',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     }
    //   })
    //   .then(result=>result.json());
      // .then(response => response.json())
      // .then((response) => { // responseData = undefined
      //     console.log(response.json());
      //  });


    // fetch(`${window.origin}/guestbook/create-entry`, {
    // fetch('http://127.0.0.1:5000/hello', {
    //     method: "GET",
    //     // body: JSON.stringify(temp_data),
    //     headers: new Headers({
    //       "content-type": "application/json"
    //     })
    //   })
    //   .then(function(response) {
    //     if (response.status !== 200) {
    //       console.log(`Looks like there was a problem. Status code: ${response.status}`);
    //       return;
    //     }
    //     response.json().then(function(data) {
    //       console.log(data);
    //     });
    //   })
    //   .catch(function(error) {
    //     console.log("Fetch error: " + error);
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


