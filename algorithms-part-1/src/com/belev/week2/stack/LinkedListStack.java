package com.belev.week2.stack;

import com.belev.week2.common.Node;

import java.util.NoSuchElementException;

public class LinkedListStack<T> implements Stack<T> {
    private Node<T> first;
    private int size;

    public LinkedListStack() {
        first = null;
        size = 0;
    }

    @Override
    public void push(T value) {
        Node<T> oldFirst = first;
        first = new Node<T>(value);
        first.setNext(oldFirst);
        size++;
    }

    @Override
    public T pop() {
        if (isEmpty()) {
            throw new NoSuchElementException();
        }

        T result = first.getValue();
        first = first.getNext();
        size--;
        return result;
    }

    @Override
    public T peek() {
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
