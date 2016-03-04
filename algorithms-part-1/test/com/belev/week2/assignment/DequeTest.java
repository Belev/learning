package com.belev.week2.assignment;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class DequeTest {
    @Test
    public void dequeTest() {
        Deque<Integer> deque = new Deque<Integer>();

        deque.addFirst(1);
        deque.addFirst(2);
        deque.addFirst(3);
        deque.addLast(4);
        deque.addLast(5);
        deque.addLast(6);
        assertEquals(deque.size(), 6);

        String itemsString = "";
        for (Integer item : deque) {
            itemsString += item;
        }
        assertEquals(itemsString, "321456");

        assertEquals(deque.removeFirst().intValue(), 3);
        assertEquals(deque.removeLast().intValue(), 6);
        assertEquals(deque.removeLast().intValue(), 5);
        assertEquals(deque.removeFirst().intValue(), 2);
        assertEquals(deque.size(), 2);
    }
}
