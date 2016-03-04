package com.belev.utils;

public class Utils {
    public static boolean less(Comparable a, Comparable b) {
        return a.compareTo(b) < 0;
    }

    public static void swap(Comparable[] array, int i, int j) {
        Comparable swap = array[i];
        array[i] = array[j];
        array[j] = swap;
    }
}
