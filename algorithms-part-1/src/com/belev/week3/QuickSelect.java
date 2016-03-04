package com.belev.week3;

import com.belev.utils.Utils;
import edu.princeton.cs.algs4.StdRandom;

import java.util.Arrays;
import java.util.NoSuchElementException;

public class QuickSelect {
    public static Comparable findKthSmallestElement(Comparable[] array, int k) {
        if (k < 0 || k >= array.length) {
            throw new NoSuchElementException("K must be between 0 and array length");
        }

        Comparable[] copyArray = Arrays.copyOf(array, array.length);
        StdRandom.shuffle(copyArray);

        int start = 0;
        int end = copyArray.length - 1;

        while (end > start) {
            int positionedElementIndex = partition(copyArray, start, end);
            if (positionedElementIndex < k) {
                start = positionedElementIndex + 1;
            } else if (positionedElementIndex > k) {
                end = positionedElementIndex - 1;
            } else {
                return copyArray[k];
            }
        }
        return copyArray[k];
    }

    private static int partition(Comparable[] array, int start, int end) {
        int leftIndex = start + 1;
        int rightIndex = end;
        while(true) {
            while (Utils.less(array[leftIndex], array[start]) && leftIndex != end) {
                leftIndex++;
            }

            while (Utils.less(array[start], array[rightIndex]) && rightIndex != start) {
                rightIndex--;
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
