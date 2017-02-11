import React, {Component, PropTypes} from 'react';

class DiceSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfDice: 0
        };

        this.addDie = this.addDie.bind(this);
        this.subtractDie = this.subtractDie.bind(this);
        this.changeNumOfDice = this.changeNumOfDice.bind(this);
    }


    static get propTypes(){
        return {
            dieValue: PropTypes.number
        }
    }

    addDie() {
        if(this.state.numberOfDice < this.props.dieValue){
            this.changeNumOfDice(this.state.numberOfDice + 1);
        }
    }

    subtractDie() {
        if(this.state.numberOfDice > 0){
            this.changeNumOfDice(this.state.numberOfDice - 1);
        }
    }

    changeNumOfDice(amount)
    {
        this.setState({
            numberOfDice: amount
        });
    }

    render() {
        return (
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <img src={'images/die_' + this.props.dieValue + '.png'} />
                <button className="btn" onClick={this.addDie}><span className="glyphicon glyphicon-plus"></span></button>
                <input type="number" min="1" max={this.props.dieValue} value={this.state.numberOfDice}/>
                <button className="btn" onClick={this.subtractDie}><span className="glyphicon glyphicon-minus"></span></button>
            </div>
        );
    }
}

export default DiceSelector;