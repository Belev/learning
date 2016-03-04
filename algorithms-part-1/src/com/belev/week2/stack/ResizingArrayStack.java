package com.belev.week2.stack;

import java.util.Arrays;
import java.util.NoSuchElementException;

public class ResizingArrayStack<T> implements Stack<T> {
    private static final int DEFAULT_SIZE = 8;

    private T[] elements;
    private int elementsCount;

    public ResizingArrayStack() {
        this(DEFAULT_SIZE);
    }

    public ResizingArrayStack(int length) {
        elements = (T[]) new Object[length];
        elementsCount = 0;
    }

    @Override
    public void push(T value) {
        if (elementsCount == elements.length) {
            resize(2 * elements.length);
        }
        elements[elementsCount] = value;
        elementsCount++;
    }

    @Override
    public T pop() {
        if (isEmpty()) {
            throw new NoSuchElementException();
        }

        T result = elements[elementsCount - 1];
        elements[elementsCount - 1] = null;
        elementsCount--;
        return result;
    }

    @Override
    public T peek() {
        if (isEmpty()) {
            throw new NoSuchElementException();
        }
        return elements[elementsCount - 1];
    }

    @Override
    public int size() {
        return elementsCount;
    }

    @Override
    public boolean isEmpty() {
        return elementsCount == 0;
    }

    private void resize(int newLength) {
        elements = Arrays.copyOf(elements, newLength);
    }
}
