import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';


class GraphicVisualizer extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        console.log('props: ', this.props.data)
        return (
            <div class="text-center">
                Hello
            </div>
        );
    }
}


export default GraphicVisualizer