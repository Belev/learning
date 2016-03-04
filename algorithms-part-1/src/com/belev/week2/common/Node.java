package com.belev.week2.common;

public class Node<V> {
    private V value;
    private Node<V> next;

    public Node(V value) {
        this.value = value;
        next = null;
    }

    public V getValue() {
        return value;
    }

    public void setValue(V value) {
        this.value = value;
    }

    public Node<V> getNext() {
        return next;
    }

    public void setNext(Node<V> next) {
        this.next = next;
    }
}
