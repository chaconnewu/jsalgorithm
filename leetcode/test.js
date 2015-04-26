var person = {};

Object.defineProperties(person, {
    _name: {
        value: 'wuyu',
        enumerable: true,
        configurable: true,
        writable: true
    },
    name: {
        get: function() {
            console.log('Reading name');
            return this._name;
        },
        set: function(value) {
            console.log('Setting name');
            this._name = value;
        },
        enumerable: true,
        configurable: true
    }
});

console.log(person._name);
console.log(person.name);
