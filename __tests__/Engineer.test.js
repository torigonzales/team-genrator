
const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('tori', '3318', 'rethwrth', 'torigonzales');

    expect(engineer.github).toBe('torigonzales');
})

test('should return as engineer', () => {
    const engineer = new Engineer('tori', '3318', 'rethwrth', 'torgonzales');

    expect(engineer.getRole()).toBe('Engineer');
})
