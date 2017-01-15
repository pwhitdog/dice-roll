import React, {Component} from 'react';

class RollValue extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
          <img src={"images/die_" + this.props.dieSize + "_face_" + this.props.randomNumber + ".png"} />
        );
    }
}

export default RollValue;