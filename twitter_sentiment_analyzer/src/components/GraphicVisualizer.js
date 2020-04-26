import React, {PureComponent} from 'react';
// import { PieChart, Pie, Sector } from 'recharts';
import Chart from "react-google-charts";


class GraphicVisualizer extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        // let data = JSON.parse(this.props.data)
        // console.log('data: ', data)
        // console.log('props: ', this.props.twitter_data.data)
        // let data = this.props.data;
        // let chart_data = [
        //     {name: 'Negative', value: this.props.twitter_data.data.negative},
        //     {name: 'Positive', vale: this.props.twitter_data.data.positive},
        //     {name: 'Neutral', value: this.props.twitter_data.data.neutral}
        // ];

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
                    // rootProps={{ 'data-testid': '1' }}
                />
            </div>
        );
    }
}


export default GraphicVisualizer
