package com.belev.week4;

import com.belev.week2.queue.Queue;
import com.belev.week4.priorityQueues.MaxPriorityQueue;
import com.belev.week4.priorityQueues.MinPriorityQueue;
import edu.princeton.cs.algs4.StdRandom;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class PriorityQueueTest {
    private Integer[] array;

    @Before
    public void setup() {
        array = new Integer[] {5, 1, 2, 8, 9, 10, 6};
    }

    @Test
    public void maxPriorityQueueTest() {
        Integer[] arraySortedDescending = new Integer[] {10, 9, 8, 6, 5, 2, 1};

        Queue<Integer> maxPriorityQueue = new MaxPriorityQueue<Integer>(array);

        assertPriorityQueueElementsOrder(maxPriorityQueue, arraySortedDescending);

        StdRandom.shuffle(array);
        for (int i = 0; i < array.length; i++) {
            maxPriorityQueue.enqueue(array[i]);
        }

        assertPriorityQueueElementsOrder(maxPriorityQueue, arraySortedDescending);
    }

    @Test
    public void minPriorityQueueTest() {
        Integer[] arraySortedAscending = new Integer[] {1, 2, 5, 6, 8, 9, 10};

        Queue<Integer> minPriorityQueue = new MinPriorityQueue<Integer>(array);

        assertPriorityQueueElementsOrder(minPriorityQueue, arraySortedAscending);

        StdRandom.shuffle(array);
        for (int i = 0; i < array.length; i++) {
            minPriorityQueue.enqueue(array[i]);
        }

        assertPriorityQueueElementsOrder(minPriorityQueue, arraySortedAscending);
    }

    private void assertPriorityQueueElementsOrder(Queue<Integer> queue, Integer[] expected) {
        assertEquals(queue.size(), expected.length);
        for (int i = 0; i < expected.length; i++) {
            assertEquals(queue.dequeue(), expected[i]);
        }
        assertEquals(queue.size(), 0);
    }
}
