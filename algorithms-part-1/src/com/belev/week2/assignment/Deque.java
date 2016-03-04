package com.belev.week2.assignment;

import java.util.Iterator;
import java.util.NoSuchElementException;

public class Deque<Item> implements Iterable<Item> {
    private Node first;
    private Node last;
    private int size;

    private class Node {
        private Item value;
        private Node prev;
        private Node next;

        public Node(Item value, Node prev, Node next) {
            this.value = value;
            this.prev = prev;
            this.next = next;
        }
    }

    public Deque() {
        first = null;
        last = null;
        size = 0;
    }

    public void addFirst(Item value) {
        if (value == null) {
            throw new NullPointerException("Trying to add null value");
        }

        Node oldFirst = first;
        first = new Node(value, null, oldFirst);
        if (oldFirst == null) {
            last = first;
        } else {
            oldFirst.prev = first;
        }
        size++;
    }

    public void addLast(Item value) {
        if (value == null) {
            throw new NullPointerException("Trying to add null value");
        }

        Node oldLast = last;
        last = new Node(value, last, null);
        if (oldLast == null) {
            first = last;
        } else {
            oldLast.next = last;
        }
        size++;
    }

    public Item removeFirst() {
        if (isEmpty()) {
            throw new NoSuchElementException("Trying to remove value from empty deque");
        }

        Item result = first.value;

        Node next = first.next;
        first = next;
        if (next == null) {
            last = null;
        } else {
            next.prev = null;
        }
        size--;

        return result;
    }

    public Item removeLast() {
        if (isEmpty()) {
            throw new NoSuchElementException("Trying to remove value from empty deque");
        }

        Item result = last.value;

        Node prev = last.prev;
        last = prev;
        if (prev == null) {
            first = null;
        } else {
            prev.next = null;
        }
        size--;

        return result;
    }

    public boolean isEmpty() {
        return first == null;
    }

    public int size() {
        return size;
    }

    @Override
    public Iterator<Item> iterator() {
        return new ListIterator();
    }

    private class ListIterator implements Iterator<Item> {
        private Node current = first;

        public boolean hasNext() {
            return current != null;
        }

        public void remove() {
            throw new java.lang.UnsupportedOperationException();
        }

        public Item next() {
            if (current == null) {
                throw new java.util.NoSuchElementException();
            }

            Item value = current.value;
            current = current.next;
            return value;
        }
    }
}
