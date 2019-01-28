import React,{Component} from 'react';
import {DropdownButton,MenuItem} from "react-bootstrap";

class PeriodDropdown extends Component{
    render() {
        return(
            <DropdownButton
                title='Select Period'
                key='3'
                id='1'
            >
                <MenuItem eventKey="1" active>Daily</MenuItem>
                <MenuItem eventKey="2">Weekly</MenuItem>
                <MenuItem eventKey="3" >
                    Current Iteration
                </MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="4">All</MenuItem>
            </DropdownButton>
        )
    }
}

export default PeriodDropdown;