import { palindrom } from "../src/no3";

test('check is palindrom?', () => {
    expect(palindrom('Kasur ini rusak')).toBe(true)
})

test('check is palindrom?', () => {
    expect(palindrom('Kasur ini kasur')).toBe(false)
})