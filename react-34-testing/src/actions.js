
export function addDigit(num) {
    return {
        type: 'ADD_DIGIT',
        payload: num,
    };
}

export function addOperator(op) {
    return {
        type: 'ADD_OPERATOR',
        payload: op,
    };
}

export function clear() {
    return {
        type: 'CLEAR'
    };
}

export function equals() {
    return {
        type: 'EQUALS',
    };
}