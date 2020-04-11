import React from 'react';
import ReactDOM, { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


class ConsoleLogButton extends React.Component {
    render(){
        return (
            <Button 
                variant="primary"
                onClick={buttonOnPress}
            >
                Testing    
            </Button>

        );
    }
}

function buttonOnPress(){
    console.log('Testing button activity');
}


export default ConsoleLogButton