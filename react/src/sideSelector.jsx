import React, {Component} from 'react';
import api from 'json!../../license.json';
import DiceSelector from './diceSelector';
let RandomOrg = require('random-org');
class SideSelector extends Component {

    constructor(props){
        super(props);
        this.state = {
            defaultOption: 4,
            showRollValue: false,
            randomNumber: 4,
            dieSizes : [4, 6, 8, 10, 12, 16, 20, 100]
    };

        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.rollDice = this.rollDice.bind(this);
        this.getNewRandomNumbers = this.getNewRandomNumbers.bind(this);
        this.getNewRandomNumbers();

    }

    handleOptionChange(event) {
        this.setState({
            defaultOption: +event.target.value,
            showRollValue: false
        });

    }

    rollDice() {
        console.log(this.state.allRandomNumbers[5]);
    }

    getNewRandomNumbers() {
        let promises = this.state.dieSizes.map(d => {
            return this.callRandomDotOrg(d);
        });

        Promise.all(promises).then(results => {
            this.setState({
               allRandomNumbers: results
            });
        });

    }

    callRandomDotOrg(dieSize)  {
        return new Promise((resolve) => {
            let random = new RandomOrg({ apiKey: api.apiKey });
            random.generateIntegers({ min: 1, max: dieSize, n: 100 })
                .then(function(result) {
                    resolve(result.random.data);
                })
        });
    }

    render() {
        let headers = this.state.dieSizes.map(function (dieSize) {
           return <th key={dieSize}><DiceSelector dieValue={dieSize} /></th>;
        });

        return (
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            {headers}
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
                <button className="btn btn-primary col-xs-6 col-xs-offset-3 col-md-6 col-lg-2 col-lg-offset-5" onClick={this.rollDice}>Roll!</button>

            </div>
        );
    }
}

export default SideSelector;