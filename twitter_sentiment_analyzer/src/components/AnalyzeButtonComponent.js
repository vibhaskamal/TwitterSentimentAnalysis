import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


class AnalyzeButton extends React.Component {
    constructor(props){
        super(props);
    }

    buttonOnPress(props){
        console.log(props);
        console.log('Trial')
    }

    render(){
        return (
            <Button 
                variant="primary"
                onClick={this.props.onClick}
            >
                Analyze    
            </Button>

        );
    }
}


export default AnalyzeButton