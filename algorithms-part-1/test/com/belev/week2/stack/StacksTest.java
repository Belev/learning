package com.belev.week2.stack;

import org.junit.Test;
import static org.junit.Assert.*;

public class StacksTest {
    @Test
    public void testResizingArrayStack() {
        testStackOfInts(new ResizingArrayStack<Integer>(2));
    }

    @Test
    public void testLinkedListStack() {
        testStackOfInts(new LinkedListStack<Integer>());
    }

    private void testStackOfInts(Stack<Integer> stack) {
        stack.push(1);
        stack.push(2);
        stack.push(3);

        assertEquals(stack.size(), 3);
        assertEquals(stack.isEmpty(), false);

        assertEquals(stack.peek().intValue(), 3);
        assertEquals(stack.pop().intValue(), 3);
        assertEquals(stack.pop().intValue(), 2);
        assertEquals(stack.pop().intValue(), 1);

        assertEquals(stack.size(), 0);
        assertEquals(stack.isEmpty(), true);
    }
}
