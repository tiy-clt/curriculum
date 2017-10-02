import { createStore } from 'redux';

function reducer(state, action) {
    if (action.type === 'ADD_PLACE') {
        return {
            places: state.places.concat([action.payload]),
        };
    }

    return state;
}

export default createStore(reducer, {
    places: [],
});