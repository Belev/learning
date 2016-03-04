package com.belev.week1.unionFind;

public class QuickFind extends UnionFind {
    public QuickFind(int size) {
        super(size);
    }

    @Override
    public boolean connected(int from, int to) {
        validate(from);
        validate(to);

        return connections[from] == connections[to];
    }

    @Override
    public void union(int from, int to) {
        validate(from);
        validate(to);

        int fromId = connections[from];
        int toId = connections[to];

        for (int i = 0; i < connections.length; i++) {
            if (connections[i] == fromId) {
                connections[i] = toId;
            }
        }

        componentsCount--;
    }
}
