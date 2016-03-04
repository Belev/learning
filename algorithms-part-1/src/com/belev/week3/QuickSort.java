package com.belev.week3;

import com.belev.utils.Utils;
import edu.princeton.cs.algs4.StdRandom;

public class QuickSort {
    public static void sort(Comparable[] array) {
        StdRandom.shuffle(array);
        sort(array, 0, array.length - 1);
    }

    private static void sort(Comparable[] array, int start, int end) {
        if (start >= end) {
            return;
        }
        int positionedElementIndex = partition(array, start, end);
        sort(array, start, positionedElementIndex - 1);
        sort(array, positionedElementIndex + 1, end);
    }

    private static int partition(Comparable[] array, int start, int end) {
        int leftIndex = start;
        int rightIndex = end + 1;
        while(true) {
            while (Utils.less(array[++leftIndex], array[start])) {
                if (leftIndex == end) {
                    break;
                }
            }

            while (Utils.less(array[start], array[--rightIndex])) {
                if (rightIndex == start) {
                    break;
                }
            }

            if (leftIndex >= rightIndex) {
                break;
            }
            Utils.swap(array, leftIndex, rightIndex);
        }
        Utils.swap(array, start, rightIndex);
        return rightIndex;
    }
}
