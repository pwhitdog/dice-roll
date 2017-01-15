import React, {Component} from 'react';
import RollValue from './rollValue';

class SideSelector extends Component {

    constructor(props){
        super(props);
        this.state = {
            sides: this.getSides(),
            defaultOption: 4,
            showRollValue: false
        };

        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.rollDice = this.rollDice.bind(this);
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
        this.setState({ showRollValue: true });
    }

    render() {
        let showRoll = this.state.showRollValue;
        return (
            <div>
                <select value={this.state.defaultOption} onChange={this.handleOptionChange}>
                    {
                        this.state.sides.map(side => {
                            return <option value={side} key={side}>{side}</option>;
                        })
                    }
                </select>
                <button className="btn btn-primary" onClick={this.rollDice}>Roll!</button>
                { showRoll ? <RollValue dieSize={this.state.defaultOption} /> : <h4>Press button to roll.</h4> }
            </div>
        );
    }
}

export default SideSelector;