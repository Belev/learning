package com.belev.week2.elementarySorting;

import com.belev.utils.Utils;

public class ShellSort {
    public static void sort(Comparable[] array) {
        int elementsDistance = 1;
        int length = array.length;

        while (elementsDistance < length / 3) {
            elementsDistance = 3 * elementsDistance + 1;
        }

        while (elementsDistance >= 1) {
            for (int i = elementsDistance; i < length; i++) {
                for (int j = i; j >= elementsDistance; j -= elementsDistance) {
                    if (Utils.less(array[j - elementsDistance], array[j])) {
                        break;
                    }
                    Utils.swap(array, j, j - elementsDistance);
                }
            }
            elementsDistance /= 3;
        }
    }
}
