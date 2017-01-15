import React, {Component} from 'react';

class RollValue extends Component {
    constructor(props){
        super(props);
    }

    render() {
        let answer = null;
        if(this.props.dieSize === "6"){
            answer = <img src={"images/die_" + this.props.dieSize + "_face_" + this.props.randomNumber + ".png"} />;
        } else {
            answer = <h3>{this.props.randomNumber}</h3>;
        }
        return (
            <div>
                {answer}
            </div>
        );
    }
}

export default RollValue;