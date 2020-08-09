package com.wsmlby.tang300encoder;

import org.junit.Test;
import org.junit.Rule;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertArrayEquals;
import static org.junit.Assert.fail;

public class Tang300EncoderTest {

    @Test
    public void init() throws Exception {
        Tang300Encoder encoder = new Tang300Encoder();
    }
 
    @Test
    public void encode() throws Exception {
        Tang300Encoder encoder = new Tang300Encoder();
        byte[] bs = {3, 14, (byte)159, 26};
        String str = encoder.encode(bs);
        assertTrue(str.length() > 10);
    }

    @Test
    public void encodeDecode() throws Exception {
        Tang300Encoder encoder = new Tang300Encoder();
        byte[] bs = {3, 14, (byte)159, 26};
        String str = encoder.encode(bs);
        assertArrayEquals(encoder.decode(str), bs);


        String str2 = " asda\n" + str;
        assertArrayEquals(encoder.decode(str2), bs);
    }
}