const Tang300Encoder = require('./index');
const fs = require('fs');
test('test length', () => {
    var encoder = new Tang300Encoder(JSON.parse(fs.readFileSync("../data/encoding.json")));
    expect(encoder.encode(new Uint8Array([15,88,99,198])).length > 10).toBeTruthy();
});

test('test encode decode', () => {
    var encoder = new Tang300Encoder(JSON.parse(fs.readFileSync("../data/encoding.json")));
    expect(encoder.decode(encoder.encode(new Uint8Array([15,88,99,198])))).toStrictEqual(new Uint8Array([15,88,99,198]));
});


test('test encode decode', () => {
    var encoder = new Tang300Encoder(JSON.parse(fs.readFileSync("../data/encoding.json")));
    expect(encoder.decode(encoder.encode(new Uint8Array([15,88,99,198])))).toStrictEqual(new Uint8Array([15,88,99,198]));
});