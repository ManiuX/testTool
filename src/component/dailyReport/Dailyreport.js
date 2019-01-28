import React, {Component} from 'react';
import {Pie, PieChart, Tooltip} from "recharts";

const data01 = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
    {name: 'Group C', value: 300}, {name: 'Group D', value: 200},
    {name: 'Group E', value: 278}, {name: 'Group F', value: 189}]

const data02 = [{name: 'Group A', value: 2400}, {name: 'Group B', value: 4567},
    {name: 'Group C', value: 1398}, {name: 'Group D', value: 9800},
    {name: 'Group E', value: 3908}, {name: 'Group F', value: 4800}];

class Dailyreport extends Component {


    render() {
        return(
            <PieChart width={800} height={400}>
                <span>Daily Test Result</span>
                <Pie isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={90} fill="#1e858c" label/>
                <Pie data={data02} cx={500} cy={200} innerRadius={30} outerRadius={90} fill="#cc798b"/>
                <Tooltip/>
            </PieChart>
        )
    }
}

export default Dailyreport;