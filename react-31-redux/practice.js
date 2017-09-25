/*
    Write a function that accepts an array of words and a pattern as parameters and returns 
    the number of words from the array that match the pattern.
    
    A pattern is composed of letters and underscores, and in order to match each word needs 
    to have the specified letters in the same position as the pattern. Underscores can be 
    replaced with any letter.
    
    The length of the word also must match the length of the pattern.

    wordhunt(["arctic", "apple", "frankie"], "a_c___");         // returns 1
    wordhunt(["about", "abler", "creep", "oboes"], "_b__");     // returns 3
    wordhunt(["heart", "nope", "plart"], "__art");              // returns 2
*/

//  Hint #1: you're gonna need for loops (more than one)
//  Hint #2: you need to keep track of a counter overall AND a boolean for each word
//  Hint #3: make sure you increment your counter at most once per word

function wordhunt(words, pattern) {
    let count = 0;
    // loop over all the words, testing whether each one matches the pattern
    for (let i = 0; i < words.length; i++) {
        let matches = true;

        // compare the length, if they're the same loop over the letters
        for (let j = 0; j < words[i].length; j++) {
            // check to see if this letter matches the pattern
            // if it doesn't, this word doesn't match
            // if the current pattern is not an underscore && not the letter in the word, fail
            if (pattern[j] !== '_' && words[i][j] !== pattern[j]) {
                matches = false;
            }
        }

        // if we make it through all of the letters and everything matches, increment count
        if (matches) {
            count++;
        }
    }

    return count;
}

console.log(wordhunt(['arctic', 'apple', 'frankie'], 'a_c___'));            // returns 1
console.log(wordhunt(['about', 'abler', 'creep', 'oboes'], '_b___'));       // returns 3
console.log(wordhunt(['heart', 'nope', 'plart'], '__art'));                 // returns 2
