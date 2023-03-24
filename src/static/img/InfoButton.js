import React from "react";
import "./InfoButton.css"
import {AiFillInfoCircle} from 'react-icons/ai';

class InfoButton extends React.Component {
    state = {
        isChecked: false
    };

    onClick = () => {
        this.state.isChecked ?
            this.setState({
                isChecked: false,
            })
            :
            this.setState({
                isChecked: true,
            });
    }

    render() {
        return (
            <React.Fragment>
                {this.state.isChecked ?
                    <AiFillInfoCircle className="InfoIcon" onClick={this.onClick}/> :
                    <AiFillInfoCircle className="InfoIcon" onClick={this.onClick}/>}
            </React.Fragment>)
    }
}

export default InfoButton;