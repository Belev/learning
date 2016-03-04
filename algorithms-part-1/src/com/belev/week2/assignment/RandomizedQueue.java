package com.belev.week2.assignment;

import edu.princeton.cs.algs4.StdRandom;

import java.util.Arrays;
import java.util.Iterator;

public class RandomizedQueue<Item> implements Iterable<Item> {
    private static final int DEFAULT_SIZE = 8;

    private Item[] elements;
    private int elementsCount;
    private int last;

    public RandomizedQueue() {
        elements = (Item[]) new Object[DEFAULT_SIZE];
        elementsCount = 0;
        last = 0;
    }

    public void enqueue(Item item) {
        if (item == null) {
            throw new java.lang.NullPointerException();
        }

        if (elementsCount == elements.length) {
            resize(2 * elements.length);
        }
        elements[last++] = item;
        elementsCount++;
    }

    public Item dequeue() {
        if (isEmpty()) {
            throw new java.util.NoSuchElementException();
        }

        int index = StdRandom.uniform(last);
        Item item = elements[index];

        last--;
        elements[index] = elements[last];
        elements[last] = null;
        elementsCount--;
        if (elementsCount > 0 && elementsCount == elements.length / 4) {
            resize(elements.length / 2);
        }

        return item;
    }

    public Item sample() {
        if (isEmpty()) {
            throw new java.util.NoSuchElementException();
        }
        return elements[StdRandom.uniform(elementsCount)];
    }

    public boolean isEmpty() {
        return elementsCount == 0;
    }

    public int size() {
        return elementsCount;
    }

    public Iterator<Item> iterator() {
        return new ArrayIterator();
    }

    private class ArrayIterator implements Iterator<Item> {
        private int index = 0;
        private Item[] array;

        public ArrayIterator() {
            array = Arrays.copyOf(elements, elementsCount);
            for (int j = 0; j < elementsCount; j++) {
                int randomIndex = StdRandom.uniform(j + 1);
                Item swap = array[j];
                array[j] = array[randomIndex];
                array[randomIndex] = swap;
            }
        }

        public boolean hasNext() {
            return index < elementsCount;
        }

        public void remove() {
            throw new java.lang.UnsupportedOperationException();
        }

        public Item next() {
            if (index >= elementsCount) {
                throw new java.util.NoSuchElementException();
            }
            return array[index++];
        }
    }

    private void resize(int newLength) {
        elements = Arrays.copyOf(elements, newLength);
    }
}
