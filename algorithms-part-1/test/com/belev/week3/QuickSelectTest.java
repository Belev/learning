package com.belev.week3;

import org.junit.Test;

import java.util.NoSuchElementException;

import static org.junit.Assert.assertEquals;

public class QuickSelectTest {
    @Test(expected = NoSuchElementException.class)
    public void quickSelectTest() {
        Integer[] array = new Integer[] {13153, -131, 198, 90, 134, -869, -800, -800};
        assertEquals(QuickSelect.findKthSmallestElement(array, 0), -869);
        assertEquals(QuickSelect.findKthSmallestElement(array, 1), -800);
        assertEquals(QuickSelect.findKthSmallestElement(array, 2), -800);
        assertEquals(QuickSelect.findKthSmallestElement(array, array.length - 1), 13153);

        QuickSelect.findKthSmallestElement(array, -1);
        QuickSelect.findKthSmallestElement(array, array.length);
    }
}
