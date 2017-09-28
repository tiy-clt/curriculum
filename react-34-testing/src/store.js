import { createStore } from 'redux';

function reducer(state, action) {
    console.log(action);

    if (action.type === 'ADD_DIGIT') {
        return {
            operation: state.operation,
            // If there is an operation, num1 stays the same and num2 changes.
            // If there is not an operation, num1 changes and num2 stays the same.
            num1: state.operation ? 
                state.num1 : 
                state.num1 * 10 + action.payload,
            num2: state.operation ? 
                state.num2 * 10 + action.payload : 
                state.num2,
        };
    }

    if (action.type === 'ADD_OPERATOR') {
        return {
            operation: action.payload,
            num1: state.num1,
            num2: state.num2,
        };
    }

    if (action.type === 'EQUALS') {
        let op = null;
        if (state.operation === '+') {
            op = (first, second) => first + second;
        } else if (state.operation === '-') {
            op = (first, second) => first - second;
        } else if (state.operation === '*') {
            op = (first, second) => first * second;
        } else {
            op = (first, second) => first / second;
        }

        return {
            operation: null,
            num1: op(state.num1, state.num2),
            num2: 0,
        };
    }

    return state;
}

export default createStore(reducer, {
    operation: null,
    num1: 0,
    num2: 0,
});