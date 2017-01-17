import React, {Component} from 'react';

class RollValue extends Component {
    constructor(props){
        super(props);
    }

    render() {
        let answer = null;
        let crit = null;
        if(this.props.dieSize === "6" || this.props.dieSize === "20"){
            answer = <img src={"images/die_" + this.props.dieSize + "_face_" + this.props.randomNumber + ".png"} />;
        } else {
            answer = <h3>{this.props.randomNumber}</h3>;
        }
        if(+this.props.dieSize === this.props.randomNumber) {
            crit = <h3 className="alert alert-danger">Crit!</h3>
        } else if(this.props.randomNumber === 1) {
            crit = <h3 className="alert alert-warning">Negative Crit!</h3>
        }
        return (
            <div>
                <span>{answer}</span>
                <span>{crit}</span>
            </div>
        );
    }
}

export default RollValue;