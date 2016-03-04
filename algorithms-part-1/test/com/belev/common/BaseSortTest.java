package com.belev.common;

import com.belev.utils.Utils;
import org.junit.Before;

import java.util.function.Consumer;

import static org.junit.Assert.assertTrue;

public abstract class BaseSortTest {
    protected Comparable[] emptyArray;
    protected Comparable[] descendingSortedArray;
    protected Comparable[] ascendingSortedArray;
    protected Comparable[] notSortedArray;

    @Before
    protected void setup() {
        emptyArray = new Integer[] {};
        descendingSortedArray = new Integer[] {999, 123, 88, 33, 21, -13};
        ascendingSortedArray = new Integer[] {-123, -100, 0, 4, 18, 599};
        notSortedArray = new Integer[] {13153, -131, 198, 90, 134, -869};
    }

    protected void sortTest(Comparable[] array, Consumer<Comparable[]> sort) {
        sort.accept(array);
        for (int i = 1; i < array.length; i++) {
            assertTrue(Utils.less(array[i - 1], array[i]));
        }
    }
}
