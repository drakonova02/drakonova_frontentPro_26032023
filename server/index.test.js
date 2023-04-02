const removeElement  = require("./index.js");

test('Item is visible according to the array', () => {
    const array     = [1, 2, 3, 4, 5, 6, 7];
    const item      = 2;
    const length    = array.length;

    expect(removeElement(array, item)).toBeUndefined();
    expect(array.length).not.toEqual(length);
})

test('Item is NOT visible according to the array', () => {
    const array     = [1, 2, 3, 4, 5, 6, 7];
    const item      = 8;
    const length    = array.length;

    expect(removeElement(array, item)).toBeUndefined();
    expect(array.length).toEqual(length);
})

test('First parameter is not an array => error', () => {
    expect(() => removeElement(7, 7)).toThrow();
})

test('Same items in array, must be deleted', () => {
    const array = [1, 2, 3, 4, 2, 6, 7];
    const item  = 2;

    expect(removeElement(array, item)).toBeUndefined();
    expect(array).not.toContain(item);
})