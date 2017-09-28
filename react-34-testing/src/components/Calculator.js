import React, { Component } from 'react';

import Display from './Display';
import NumberButton from './NumberButton';
import OperatorButton from './OperatorButton';

class Calculator extends Component {
    render() {
        return (
            <section>
                <div>
                    <Display />
                </div>
                <div>
                    <div>
                        <NumberButton value={7} />
                        <NumberButton value={8} />
                        <NumberButton value={9} />
                        <OperatorButton value="+" />
                    </div>
                    <div>
                        <NumberButton value={4} />
                        <NumberButton value={5} />
                        <NumberButton value={6} />
                        <OperatorButton value="-" />
                    </div>
                    <div>
                        <NumberButton value={1} />
                        <NumberButton value={2} />
                        <NumberButton value={3} />
                        <OperatorButton value="*" />
                    </div>
                    <div>
                        <NumberButton value={0} />
                        <OperatorButton value="/" />
                        <OperatorButton value="=" />
                        <OperatorButton value="C" />
                    </div>
                </div>
            </section>
        );
    }
}

export default Calculator;