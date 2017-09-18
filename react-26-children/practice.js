
/**
 * Write a function called longx that accepts a single string and returns 
 * the length of the longest run of the letter 'x' in the string.
 * 
 * For example:
 *  longx('asdxxxxf');      // returns 4
 *  longx('xa');            // returns 1
 *  longx('xpxpxpxpxp');    // returns 1
 *  longx('xxpxxxxxp');     // returns 5
 * 
 * There's an iterative approach as well as a functional approach (using map, filter, reduce).
 */


function longx(text) {
    let longestRun = 0; // longest run so far
    let currentRun = 0; // current run

    // need to iterate through the string
    // search for the letter 'x', start counting # of x's
    for (let i = 0; i < text.length; i++) {
        if (text[i] === 'x') {
            // check if the letter before is an x (optional)
            currentRun++;
        } else {
            // counter restarts, save currentRun if its longest so far
            if (currentRun > longestRun) {
                longestRun = currentRun;
            }
            currentRun = 0;
        }
    }

    return longestRun;
}

console.log(longx('asdxxxxf'));
console.log(longx('xa'));
console.log(longx('xpxpxpxpxp'));
console.log(longx('xxpxxxxxp'));

