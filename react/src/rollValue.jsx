import React, {Component} from 'react';

class RollValue extends Component {
    constructor(props){
        super(props);
        this.state = {
            dieSize: props.dieSize,
            randomNumber: this.randomNumber()
        }

        this.randomNumber = this.randomNumber.bind(this);
    }

    randomNumber() {
        return Math.floor(Math.random() * (this.props.dieSize - 1)) + 1;
    }

    render() {
        return (
          <h3>{this.state.randomNumber} is the random number.</h3>
        );
    }
}

export default RollValue;