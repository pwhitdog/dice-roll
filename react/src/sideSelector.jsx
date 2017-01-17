import React, {Component} from 'react';
import RollValue from './rollValue';

class SideSelector extends Component {

    constructor(props){
        super(props);
        this.state = {
            sides: this.getSides(),
            defaultOption: 4,
            showRollValue: false,
            randomNumber: 4
        };

        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.rollDice = this.rollDice.bind(this);
        this.randomNumber = this.randomNumber.bind(this);
    }

    getSides() {
        return [4, 6, 7, 8, 10, 12, 16, 20];
    }

    handleOptionChange(event) {
        this.setState({
            defaultOption: event.target.value,
            showRollValue: false
        });
    }

    rollDice() {
        this.setState({
            showRollValue: true,
            randomNumber: this.randomNumber()
        });
    }

    randomNumber() {
        return Math.floor(Math.random() * (this.state.defaultOption)) + 1;
    }

    render() {

        let display = null;
        if (this.state.showRollValue){
            display = <RollValue dieSize={this.state.defaultOption} randomNumber={this.state.randomNumber} />;
        } else {
            display = <div></div>
        }

        return (
            <div>
                <select value={this.state.defaultOption} onChange={this.handleOptionChange}>
                    {
                        this.state.sides.map(side => {
                            return <option value={side} key={side}>{side}</option>;
                        })
                    }
                </select>
                <div>
                    <button className="btn btn-primary" onClick={this.rollDice}>Roll!</button>
                </div>
                {display}
            </div>
        );
    }
}

export default SideSelector;