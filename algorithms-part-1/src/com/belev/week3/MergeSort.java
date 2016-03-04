package com.belev.week3;

import com.belev.utils.Utils;

public class MergeSort {
    public static void sort(Comparable[] array) {
        Comparable[] helperArray = new Comparable[array.length];
        sort(array, helperArray, 0, array.length - 1);
    }

    private static void sort(Comparable[] array, Comparable[] helperArray, int start, int end) {
        if (end <= start) {
            return;
        }

        int mid = start + (end - start) / 2;
        sort(array, helperArray, start, mid);
        sort(array, helperArray, mid + 1, end);
        merge(array, helperArray, start, mid, end);
    }

    private static void merge(Comparable[] array, Comparable[] helperArray, int start, int mid, int end) {
        for (int i = start; i <= end; i++) {
            helperArray[i] = array[i];
        }

        int leftIndex = start;
        int rightIndex = mid + 1;
        for (int currentIndex = start; currentIndex <= end; currentIndex++) {
            if (leftIndex > mid) {
                array[currentIndex] = helperArray[rightIndex];
                rightIndex++;
            } else if (rightIndex > end) {
                array[currentIndex] = helperArray[leftIndex];
                leftIndex++;
            } else if (Utils.less(helperArray[rightIndex], helperArray[leftIndex])) {
                array[currentIndex] = helperArray[rightIndex];
                rightIndex++;
            } else {
                array[currentIndex] = helperArray[leftIndex];
                leftIndex++;
            }
        }
    }
}
