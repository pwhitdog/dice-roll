import React, {Component, PropTypes} from 'react';

class RollValue extends Component {

    static get propTypes() {
        return {
            dieSize: PropTypes.number,
            randomNumber: PropTypes.number
        }
    }

    render() {
        let answer = null;
        let crit = null;
        if(this.props.dieSize === 6 || this.props.dieSize === 20 || this.props.dieSize === 4){
            answer = <img src={"images/die_" + this.props.dieSize + "_face_" + this.props.randomNumber + ".png"} className="col-xs-6 col-xs-offset-3 col-md-6"/>;
        } else {
            answer = <h3 className="col-xs-6 col-xs-offset-3 col-md-6 center">{this.props.randomNumber}</h3>;
        }
        if(this.props.dieSize === this.props.randomNumber) {
            crit = <h3 className="alert alert-danger col-xs-6 col-xs-offset-3 col-md-6">Crit!</h3>
        } else if(this.props.randomNumber === 1) {
            crit = <h3 className="alert alert-warning col-xs-6 col-xs-offset-3 col-md-6">Negative Crit!</h3>
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