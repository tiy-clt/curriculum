/**
 * Determine if two strings are anagrams of each other.
 * 
 * Anagrams are phrases composed of valid words that use the same letters in different orders. 
 * Write a function that identifies whether two strings are anagrams. Punctation, 
 * capitalization, and spacing can all be ignored.
 * 
 * anagram("Clint Eastwood", "Old West Action")     // returns true
 * anagram("folly", "yolfl")                        // returns true
 * anagram("Reddit", "Eat dirt")                    // returns false
 * anagram("Hello there", "There hello")            // returns true
 */

 function anagram(first, second) {
    // remove all spaces
    // normalize case (all lowercase)
    first = first.split(' ').join('').toLowerCase();
    second = second.split(' ').join('').toLowerCase();

    // split each string into letters
    const fLetters = first.split('');
    const sLetters = second.split('');

    // sort the letters
    fLetters.sort();
    sLetters.sort();

    // the two arrays should be the same (joining them into a string)
    // return boolean
    return fLetters.join('') === sLetters.join('');
 }

 console.log(anagram("Clint Eastwood", "Old West Action"));
 console.log(anagram("folly", "yolfl"));
 console.log(anagram("Reddit", "Eat dirt"));
 console.log(anagram("Hello there", "There hello"));