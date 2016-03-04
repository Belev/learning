package com.belev.week2.elementarySorting;

import com.belev.utils.Utils;

public class InsertionSort {
    public static void sort(Comparable[] array) {
        for (int i = 0; i < array.length; i++) {
            for (int j = i; j > 0; j--) {
                if (Utils.less(array[j - 1], array[j])) {
                    break;
                }
                Utils.swap(array, j, j - 1);
            }
        }
    }
}
