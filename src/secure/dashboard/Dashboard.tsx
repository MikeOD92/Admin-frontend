import Wrapper from '../Wrapper';
import React, { Component } from 'react'
import c3 from 'c3';
import axios from 'axios';



export default class Dashboard extends Component {

    componentDidMount = async () => {
        let chart = c3.generate({
            bindto:'#chart',
            data:{
                x:'x',
                columns: [
                    ['x'],
                    ['Sales'],
                ],
                types: {
                    Sales: 'bar'
                }
            },
            axis: {
                x: {
                    type: 'timeseries',
                    tick: {
                        format: '%Y-%m-%d'
                    }
                }
            } 
        });

        const response = await axios.get('chart');
        
        const records: {date: string, sum: number}[] = response.data.data;

        chart.load({
            columns: [
                ['x', ...records.map((r) => {
                    if (r.date === undefined){
                        return 0;
                    } else {
                        return r.date
                    }})],
                    // added if statment to catch undefined values and treat them as 0's since ce3 cannot handel undefined
                ['Sales', ...records.map( (r) => {
                    if (r.sum === undefined){
                        return 0;
                    } else {
                        return r.sum
                    }})],
            ]
        })
    }
    render() {
        return (
            <Wrapper>
                <h2> Daily Sales</h2>

                <div id='chart'/>
            </Wrapper>
        )
    }
}
