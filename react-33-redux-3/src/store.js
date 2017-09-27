import { createStore } from 'redux';

function reducer(state, action) {
    console.log(action);

    if (action.type === 'ADD_FRIENDS') {
        // come back
        return {
            // combine state.friends and action.payload into
            // one big array 
            friends: state.friends.concat(action.payload),
        };
    }

    return state;
}

export default createStore(reducer, {
    friends: [],
});