import React from 'react';

class PageHeading extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <header>
                <h1 class="text-center">
                    {this.props.heading}
                </h1>
            </header>
        );
    }
}


export default PageHeading