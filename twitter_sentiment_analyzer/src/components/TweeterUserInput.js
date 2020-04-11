import React from 'react';
import ReactDOM, { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class TweeterUserInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h4 class="text-center">
                    Enter the name of the person who's tweets you want to analyze
                </h4>
            </div>
        );
    }
}

export default TweeterUserInput