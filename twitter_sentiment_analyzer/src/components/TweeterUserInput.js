import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class TweeterUserInputClass extends React.Component {
    constructor(props){
        super(props);
    }

    handleTweeterValueChange(event) {
        this.setState({inputValue: event.target.value});
        this.props.tweeter_name = event.target.value
    }

    render(){
        return (
            <div>
                <h4 class="text-center">
                    Enter the name of the person who's tweets you want to analyze
                </h4>
                <br></br>
                <form  class="text-center">
                    <label>
                        <input type="text" name="name" value={this.props.inputValue} onChange={this.props.onChange} />
                    </label>
                </form>
            </div>
        );
    }
}

