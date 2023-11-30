import { ascSort, descSort } from "../src/no2";

test('testing ascending sort', () => {
    expect(ascSort([5, 2, 1, 9, 3, 7, 6])).toStrictEqual([1, 2, 3, 5, 6, 7, 9])
})

test('test descending sort', () => {
    expect(descSort([5, 2, 1, 9, 3, 7, 6])).toStrictEqual([9, 7, 6, 5, 3, 2, 1])
})