package com.belev.week1.unionFind;

public class WeightedQuickUnion extends UnionFind {
    private int[] rootElementsCount;

    public WeightedQuickUnion(int size) {
        super(size);

        rootElementsCount = new int[size];
        for (int i = 0; i < size; i++) {
            rootElementsCount[i] = 0;
        }
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

        if (fromRoot == toRoot) {
            return;
        }

        if (rootElementsCount[fromRoot] < rootElementsCount[toRoot]) {
            connections[fromRoot] = toRoot;
            rootElementsCount[toRoot] += rootElementsCount[fromRoot] + 1;
        } else {
            connections[toRoot] = fromRoot;
            rootElementsCount[fromRoot] += rootElementsCount[toRoot] + 1;
        }

        componentsCount--;
    }

    private int getRoot(int element) {
        while (element != connections[element]) {
            connections[element] = connections[connections[element]];
            element = connections[element];
        }
        return element;
    }
}
