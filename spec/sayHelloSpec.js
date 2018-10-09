var sayHello = require('../src/sayHello.js');

describe('Greet', () => {
    it('concats Hello and a name', () => {
        let name = 'Justine';
        var actual = sayHello.greet(name);
        var expected = 'Hello, ' + name;
        expect(actual).toEqual(expected);
    });
});