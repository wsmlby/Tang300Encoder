// return string

function Tang300Encoder(table, decoder /* boolean */) {
    this.table = table;
    if (decoder) {
        this.buildDecoder();
    }
}
var coreDelimiter = /[，？！。\n]/;
Tang300Encoder.prototype.buildDecoder = function () {
    if (!this.decoder) {
        var decoder = {};
        this.table.forEach((poem, idx) => {
            poem.forEach((s) => {
                decoder[s.replace(coreDelimiter, '')] = idx;
            })
        })
        this.decoder = decoder;
    }
}
Tang300Encoder.prototype.encode = function (buffer /* Uint8Array */) {
    if (buffer instanceof Uint8Array) {
        var rst = "";
        for (var i = 0; i < buffer.length; i++) {
            var opt = this.table[buffer[i]];
            var idx = i % opt.length;
            rst += opt[idx];
        }
        return rst;
    } else {
        throw new TypeError("Buffer must be Uint8Array");
    }
}
Tang300Encoder.prototype.decode = function (str) {
    this.buildDecoder();
    return Uint8Array.from(str.split(coreDelimiter).filter(f => f.length && f in this.decoder).map(p => this.decoder[p]));
}

module.exports = Tang300Encoder;