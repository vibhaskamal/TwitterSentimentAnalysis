import React from 'react';
import ReactDOM, { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


class AnalyzeButton extends React.Component {
    render(){
        return (
            <Button 
                variant="primary"
                onClick={buttonOnPress}
            >
                Analyze    
            </Button>

        );
    }
}

function buttonOnPress(){
    console.log('Testing button activity');
}


export default AnalyzeButton