// Actions (objects)
// Make an action creator because each move action is going to be a little
// different, specifically the x and y values will change.
export function move(x, y) {
    return {
        type: 'MOVE',
        payload: {
            x: x,
            y: y,
        },
    };
}