import React, {Component} from 'react';
import RollValue from './rollValue';
import api from 'json!../../license.json';

class SideSelector extends Component {

    constructor(props){
        super(props);
        this.state = {
            sides: [4, 6, 8, 10, 12, 16, 20],
            defaultOption: 4,
            showRollValue: false,
            randomNumber: 4
        };

        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.rollDice = this.rollDice.bind(this);
        this.randomNumber = this.randomNumber.bind(this);
    }

    handleOptionChange(event) {
        this.setState({
            defaultOption: +event.target.value,
            showRollValue: false
        });
    }

    rollDice() {
        this.randomNumber();
    }

    randomNumber() {
        let self = this;

        $.get("https://www.random.org/integers/?num=1&min=1&max=" + this.state.defaultOption + "&col=1&base=10&format=plain&rnd=new")
            .done(data => {
                self.setState({
                    showRollValue: true,
                    randomNumber: +data
                });
        });
    }

    render() {

        let display = null;
        if (this.state.showRollValue){
            display = <RollValue dieSize={this.state.defaultOption} randomNumber={this.state.randomNumber} />;
        } else {
            display = <div></div>
        }

        return (
            <div className="center row">
                <select value={this.state.defaultOption} onChange={this.handleOptionChange} className="col-xs-6 col-xs-offset-3 col-md-6 col-lg-2 col-lg-offset-5">
                    {
                        this.state.sides.map(side => {
                            return <option value={side} key={side}>{side}</option>;
                        })
                    }
                </select>
                <div className="center row">
                    <button className="btn btn-primary col-xs-6 col-xs-offset-3 col-md-6 col-lg-2 col-lg-offset-5" onClick={this.rollDice}>Roll!</button>
                </div>
                {display}
            </div>
        );
    }
}

export default SideSelector;