import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class TweeterUserInputClass extends React.Component {
    constructor(props){
        super(props);
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
                        <input 
                            type="text" 
                            value={this.props.inputValue} 
                            onChange={this.props.onChange} 
                        />
                    </label>
                </form>
            </div>
        );
    }
}

export default TweeterUserInputClass

