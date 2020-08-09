# Tang300Encoder

Encode any binary data into innocent Tang Poems.

## Installation
Load the jar.

## Usage


```java
import com.wsmlby.tang300encoder.Tang300Encoder;

Tang300Encoder encoder = new Tang300Encoder();
byte[] bs = {3, 14, (byte)159, 26};
String str = encoder.encode(bs);
// 红豆生南国，单于夜遁逃。欣欣此生意，能饮一杯无
assertArrayEquals(encoder.decode(str), bs);
```

```kotlin
import com.wsmlby.tang300encoder.Tang300Encoder

val encoder = Tang300Encoder();
var data = byteArrayOf(0x3, 0xE, 0x9F.toByte(), 0x1A) // [3, 14, 159, 26]
val str = encoder.encode(data);
// 红豆生南国，单于夜遁逃。欣欣此生意，能饮一杯无
encoder.decode(str).joinToString(", ") {
    java.lang.String.format("%d", it.toUByte().toInt())
}
// 3, 14, 159, 26
```