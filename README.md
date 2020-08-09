# Tang300Encoder

Encode any binary data into innocent Tang Poems.

## Installation
```bash
npm install --save tang300encoder
```

## Usage


```js
const Tang300Encoder = require("tang300encoder")
var f = new Tang300Encoder()
console.log(f.encode(Uint8Array.from([3,14,159,26])))
// 红豆生南国，单于夜遁逃。欣欣此生意，能饮一杯无

console.log(f.decode(f.encode(Uint8Array.from([3,14,159,26]))))
// Uint8Array [ 3, 14, 159, 26 ]
```
## CDN Builds

### UMD

To load this module directly into browsers you can use the [UMD (Universal Module Definition)](https://github.com/umdjs/umd) builds from any of the following CDNs:

**Using [UNPKG](https://unpkg.com/tang300encoder@latest/)**:

```html
<script src="https://unpkg.com/tang300encoder@latest/bundle.js"></script>
```

**Using [jsDelivr](https://cdn.jsdelivr.net/npm/tang300encoder@latest/)**:

```html
<script src="https://unpkg.com/tang300encoder@latest/bundle.js"></script>
```

Then you can use them directly in browsers by
``` js
var f = new Tang300Encoder()
```