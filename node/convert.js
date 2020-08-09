const fs = require('fs');

var ls = fs.readFileSync("../data/raw.txt").toString();
var s1 = ls.split(/\d\d\d/).filter(l => l.length > 0)
var poems = s1.map(l => l.split("\n\n").filter(s => s.length > 0)).map(ps => ps[ps.length - 1]);
var poems = poems.sort((a, b) => a.length - b.length);
poems = poems.slice(0, 256);
console.log(poems.length);

var szk = {};
var encodingTable = [];
poems.forEach((poem, idx) => {
    var ss = poem.split("\n").join("").split(/(\p{Script=Han}+[，？！。])/u).filter(l => l.length > 0);
    encodingTable.push(ss);
})

fs.writeFileSync("../data/encoding.json", JSON.stringify(encodingTable));
fs.writeFileSync("../java/src/main/resources/data.txt", encodingTable.map(poem => poem.join("#")).join("##"));
