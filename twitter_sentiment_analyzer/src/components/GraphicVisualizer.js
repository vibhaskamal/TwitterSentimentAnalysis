import React, {PureComponent} from 'react';
import Chart from "react-google-charts";


class GraphicVisualizer extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div class="text-center">
                Hello
                <Chart
                    width={'500px'}
                    height={'300px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Task', 'Hours per Day'],
                        ['Negative', this.props.twitter_data.data.negative],
                        ['Positive', this.props.twitter_data.data.positive],
                        ['Neutral', this.props.twitter_data.data.neutral],
                    ]}
                    options={{
                        title: 'Twitter Data Analysis',
                        is3D: true,
                    }}
                />
            </div>
        );
    }
}


export default GraphicVisualizer
