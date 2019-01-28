import React, {Component} from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import Dailyreport from '../dailyReport/Dailyreport';


class Hometab extends Component {
    render() {
        return(
            <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="Test Case Management">
                    Test case manage
                </Tab>
                <Tab eventKey={2} title="Daily Reports">
                    <Dailyreport/>
                </Tab>

            </Tabs>
        )
    }
}

export default Hometab;