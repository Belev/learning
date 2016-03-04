package com.belev.week2.stack;

public interface Stack<T> {
    void push(T value);
    T pop();
    T peek();
    int size();
    boolean isEmpty();
}
