package com.belev.week2.elementarySorting;

import com.belev.utils.Utils;

public class SelectionSort {
    public static void sort(Comparable[] array) {
        int length = array.length;

        for (int i = 0; i < length; i++) {
            int minElementIndex = i;
            for (int j = i + 1; j < length; j++) {
                if (Utils.less(array[j], array[minElementIndex])) {
                    minElementIndex = j;
                }
            }
            Utils.swap(array, i, minElementIndex);
        }
    }
}
