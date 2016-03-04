package com.belev.week2.queue;

import java.util.NoSuchElementException;

public class ResizingArrayQueue<V> implements Queue<V> {
    private static final int DEFAULT_SIZE = 8;

    private V[] elements;
    private int elementsCount;
    private int firstElementIndex;
    private int lastElementIndex;

    public ResizingArrayQueue() {
        this(DEFAULT_SIZE);
    }

    public ResizingArrayQueue(int length) {
        elements = (V[]) new Object[length];
        elementsCount = 0;
        firstElementIndex = 0;
        lastElementIndex = 0;
    }

    @Override
    public void enqueue(V value) {
        if (elementsCount == elements.length) {
            resize(2 * elements.length);
        }
        elements[lastElementIndex] = value;
        lastElementIndex++;
        elementsCount++;
        if (lastElementIndex == elements.length) {
            lastElementIndex = 0;
        }
    }

    @Override
    public V dequeue() {
        if (isEmpty()) {
            throw new NoSuchElementException();
        }

        V result = elements[firstElementIndex];
        elements[firstElementIndex] = null;
        firstElementIndex++;
        elementsCount--;
        if (firstElementIndex == elements.length) {
            firstElementIndex = 0;
        }
        return result;
    }

    @Override
    public V peek() {
        if (isEmpty()) {
            throw new NoSuchElementException();
        }
        return elements[firstElementIndex];
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
        V[] newElements = (V[]) new Object[newLength];

        for (int i = 0; i < elementsCount; i++) {
            newElements[i] = elements[(firstElementIndex + i) % elements.length];
        }

        elements = newElements;
        firstElementIndex = 0;
        lastElementIndex = elementsCount;
    }
}
