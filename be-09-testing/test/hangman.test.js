
// Inputs: a word and a letter
// Return: a boolean value
function letterExistsInWord(word, letter) {
    let lowerWord = word.toLowerCase();
    let lowerLetter = letter.toLowerCase();

    for (let i = 0; i < lowerWord.length; i++) {
        if (lowerWord[i] === lowerLetter) {
            return true;
        }
    }

    // return true or false
    return false;
}

test('determine whether a letter exists in a word', function () {
    expect(letterExistsInWord('fish', 's')).toBe(true);
    expect(letterExistsInWord('fissssssssssh', 's')).toBe(true);
    expect(letterExistsInWord('catdog', 's')).toBe(false);
});

test('works on mixed case letters', function () {
    expect(letterExistsInWord('SILENCE', 's')).toBe(true);
    expect(letterExistsInWord('silence', 'S')).toBe(true);
});

test('works on non-latin characters', function () {
    expect(letterExistsInWord('fisß', 'ß')).toBe(true);
});

test('works on the empty string', function () {
    expect(letterExistsInWord('', 's')).toBe(false);
});