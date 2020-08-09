package com.wsmlby.tang300encoder;

import java.util.HashMap;
import java.lang.ClassLoader;
import java.io.InputStream;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.Arrays;

class Tang300Encoder {

    private String[][] mEncodeTable;
    private HashMap<String, Byte> mDecodeTable;
    private static String sRegex = "\\[，？！。\n]";

    public Tang300Encoder() throws IOException, UnsupportedEncodingException{
        ClassLoader classloader = Thread.currentThread().getContextClassLoader();
        InputStream is = classloader.getResourceAsStream("data.txt");
        BufferedReader reader = new BufferedReader(new InputStreamReader(is, "UTF-16"));
        String[] poems = reader.readLine().split("##");
        mEncodeTable = new String[poems.length][];
        for(int i = 0; i < poems.length; i ++) {
            mEncodeTable[i] = poems[i].split("#");
        }
        mDecodeTable = new HashMap<String, Byte>();
        for(int i = 0; i < mEncodeTable.length; i ++) {
            for(int j = 0; j < mEncodeTable[i].length; j ++) {
                mDecodeTable.put(mEncodeTable[i][j].replaceAll(sRegex, ""), (Byte)(byte)i);
            }
        }
    }

    public String encode(byte[] data) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < data.length; i++) {
            String[] opt = mEncodeTable[data[i]];
            int idx = i % opt.length;
            sb.append(opt[idx]);
        }
        return sb.toString();
    }

    public byte[] decode(String string) {
        String[] ss = string.split(sRegex);
        byte[] rst = new byte[ss.length];
        int idx = 0;
        for(String s: ss) {
            if (mDecodeTable.containsKey(s)) {
                rst[idx++] = mDecodeTable.get(s);
            }
        }
        return Arrays.copyOfRange(rst, 0, idx);
    }
} 