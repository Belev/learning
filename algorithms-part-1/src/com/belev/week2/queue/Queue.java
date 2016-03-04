package com.belev.week2.queue;

public interface Queue<V> {
    void enqueue(V value);
    V dequeue();
    V peek();
    int size();
    boolean isEmpty();
}
