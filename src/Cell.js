import React, { Component } from 'react';
// import { render } from 'enzyme';


export default class Cell extends Component {
    constructor(props) {
        super()
        this.state = {
            color: props.value

        }

    }

    handleClick = () => {
        let newColor = '#333'
        this.setState({ color: newColor })
    }

    render() {
        return (
            <div 
            className="cell" 
            style={{backgroundColor: this.state.color}} 
            onClick={this.handleClick}>
            </div>
        )

    }

}


