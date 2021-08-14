const { test } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('ed', '4321', 'wurghowr', '234');

    expect(manager.officeNumber).toBe('234');
})

test('should return as manager', () => {
    const manager = new Manager('ed', '4321', 'wurghowr', '234');

    expect(manager.getRole()).toBe('Manager');
})