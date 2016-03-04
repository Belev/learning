package com.belev.week1.unionFind;

public abstract class UnionFind {
    protected int componentsCount;
    protected int[] connections;

    protected UnionFind(int size) {
        componentsCount = size;
        connections = new int[size];
        for (int i = 0; i < size; i++) {
            connections[i] = i;
        }
    }

    public int getComponentsCount() {
        return componentsCount;
    }

    protected void validate(int position) {
        int size = connections.length;
        if (position < 0 || position >= size) {
            throw new IndexOutOfBoundsException("index " + position + " is not between 0 and " + (size - 1));
        }
    }

    public abstract boolean connected(int from, int to);
    public abstract void union(int from, int to);
}
