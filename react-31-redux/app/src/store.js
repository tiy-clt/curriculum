
import { createStore } from 'redux';

/**
 * 'Store' is the term for where information is stored. The store is the
 * object that all of your application's state is stored in.
 * 
 * In order to set up Redux we need to do three things:
 *  1. Create a reducer function. Responsibility: change the state.
 *  2. Create 1+ actions. Responsibility: tell the reducer what to change.
 *  3. Connect actions + reducer to our components.
 */

export const goUpAction = {
    type: 'INCREMENT', // extra important; tells the reducer WHAT to do
    payload: 1,        // extra information about HOW to do it
};

export const goDownAction = {
    type: 'DECREMENT',
    payload: 1,
};

// Two inputs, always
//  state = the previous state
//  action = the modification we want to apply
// Goal: return a new state
export function reducer(state, action) {
    // You should ==> ALWAYS <== create a new state
    // object, not modify the existing one.
    if (action.type === 'INCREMENT') {
        return { counter: state.counter + 1 };
    }

    if (action.type === 'DECREMENT') {
        return { counter: state.counter - 1 };
    }

    // Return the unchanged state.
    return state;
}

// Weave the reducer function and the initial state
// together into the actual 'store'
export const store = createStore(reducer, {
    counter: 0
},
    // usage notes for devtools extension:
    // https://github.com/zalmoxisus/redux-devtools-extension#usage
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);