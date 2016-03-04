package com.belev.week3;

import com.belev.common.BaseSortTest;
import org.junit.Before;
import org.junit.Test;

public class SortTest extends BaseSortTest {
    @Before
    public void setup() {
        super.setup();
    }

    @Test
    public void mergeSortTest() {
        sortTest(emptyArray, MergeSort::sort);
        sortTest(descendingSortedArray, MergeSort::sort);
        sortTest(ascendingSortedArray, MergeSort::sort);
        sortTest(notSortedArray, MergeSort::sort);
    }

    @Test
    public void quickSortTest() {
        sortTest(emptyArray, QuickSort::sort);
        sortTest(descendingSortedArray, QuickSort::sort);
        sortTest(ascendingSortedArray, QuickSort::sort);
        sortTest(notSortedArray, QuickSort::sort);
    }
}
