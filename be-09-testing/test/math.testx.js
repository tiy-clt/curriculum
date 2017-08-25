
function addEmUp(x, y, z) {
    return x + y + z;
}

/**
 * Goal #1: describe what you expect to happen in english
 * Goal #2: describe your expectations
 */
test('addEmUp adds correctly', function () {
    expect(addEmUp(1, 2, 3)).toBe(6);

    expect(addEmUp(-1, 2, 3)).toBe(4);
});

test('addEmUp with all negatives', function () {
    expect(addEmUp(-1, -2, -3)).toBe(-6);
});