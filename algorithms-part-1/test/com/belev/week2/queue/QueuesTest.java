package com.belev.week2.queue;

import org.junit.Test;

import static org.junit.Assert.*;

public class QueuesTest {
    @Test
    public void testResizingQueueOfInts() {
        Queue<Integer> queue = new ResizingArrayQueue<Integer>(2);
        testQueueOfInts(queue);
    }

    @Test
    public void testLinkedListQueueOfInts() {
        Queue<Integer> queue = new LinkedListQueue<Integer>();
        testQueueOfInts(queue);
    }

    private void testQueueOfInts(Queue<Integer> queue) {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        assertEquals(queue.size(), 3);
        assertEquals(queue.isEmpty(), false);

        assertEquals(queue.peek().intValue(), 1);
        assertEquals(queue.dequeue().intValue(), 1);
        assertEquals(queue.dequeue().intValue(), 2);
        assertEquals(queue.dequeue().intValue(), 3);

        assertEquals(queue.size(), 0);
        assertEquals(queue.isEmpty(), true);
    }
}
