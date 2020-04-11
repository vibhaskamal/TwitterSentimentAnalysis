import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ConsoleLogButton from './components/testButton.js'


class Testing extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1 class="text-center">
            Twitter Sentiment Analyzer
          </h1>
        </header>
        <ConsoleLogButton />  
      </div>
    );
  }
}



ReactDOM.render(
  <Testing />,
  document.getElementById('root')
);


