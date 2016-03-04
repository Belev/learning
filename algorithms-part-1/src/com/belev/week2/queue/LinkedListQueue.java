package com.belev.week2.queue;

import com.belev.week2.common.Node;

import java.util.NoSuchElementException;

public class LinkedListQueue<V> implements Queue<V> {
    private Node<V> first;
    private Node<V> last;
    private int size;

    public LinkedListQueue() {
        first = null;
        last = null;
        size = 0;
    }

    @Override
    public void enqueue(V value) {
        Node<V> oldLast = last;
        last = new Node<V>(value);

        if (isEmpty()) {
            first = last;
        } else {
            oldLast.setNext(last);
        }
        size++;
    }

    @Override
    public V dequeue() {
        if (isEmpty()) {
            throw new NoSuchElementException();
        }

        V result = first.getValue();
        first = first.getNext();
        if (isEmpty()) {
            last = null;
        }
        size--;
        return result;
    }

    @Override
    public V peek() {
        if (isEmpty()) {
            throw new NoSuchElementException();
        }
        return first.getValue();
    }

    @Override
    public int size() {
        return size;
    }

    @Override
    public boolean isEmpty() {
        return first == null;
    }
}
