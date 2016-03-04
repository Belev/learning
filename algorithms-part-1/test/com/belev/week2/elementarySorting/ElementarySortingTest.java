package com.belev.week2.elementarySorting;

import com.belev.common.BaseSortTest;
import org.junit.Before;
import org.junit.Test;

import java.util.function.Consumer;

import static org.junit.Assert.assertTrue;

public class ElementarySortingTest extends BaseSortTest {
    @Before
    public void setup() {
        super.setup();
    }

    @Test
    public void selectionSortTest() {
        sortTest(emptyArray, SelectionSort::sort);
        sortTest(descendingSortedArray, SelectionSort::sort);
        sortTest(ascendingSortedArray, SelectionSort::sort);
        sortTest(notSortedArray, SelectionSort::sort);
    }

    @Test
    public void insertionSortTest() {
        sortTest(emptyArray, InsertionSort::sort);
        sortTest(descendingSortedArray, InsertionSort::sort);
        sortTest(ascendingSortedArray, InsertionSort::sort);
        sortTest(notSortedArray, InsertionSort::sort);
    }

    @Test
    public void shellSortTest() {
        sortTest(emptyArray, ShellSort::sort);
        sortTest(descendingSortedArray, ShellSort::sort);
        sortTest(ascendingSortedArray, ShellSort::sort);
        sortTest(notSortedArray, ShellSort::sort);
    }
}
