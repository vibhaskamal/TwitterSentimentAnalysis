import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function TweeterUserInputClass(props) {
    return (
        <div>
            <h4 class="text-center">
                Enter the name of the person who's tweets you want to analyze
            </h4>
            <br></br>
            <form  class="text-center">
                <label>
                    <input type="text" name="name" />
                </label>
            </form>
        </div>
    );
}