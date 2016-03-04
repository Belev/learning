package com.belev.week1.unionFind;

public class QuickUnion extends UnionFind {
    public QuickUnion(int size) {
        super(size);
    }

    @Override
    public boolean connected(int from, int to) {
        validate(from);
        validate(to);

        return getRoot(from) == getRoot(to);
    }

    @Override
    public void union(int from, int to) {
        validate(from);
        validate(to);

        int fromRoot = getRoot(from);
        int toRoot = getRoot(to);
        connections[fromRoot] = toRoot;

        componentsCount--;
    }

    private int getRoot(int element) {
        while (element != connections[element]) {
            element = connections[element];
        }
        return element;
    }
}
