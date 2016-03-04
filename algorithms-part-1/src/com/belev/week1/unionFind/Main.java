package com.belev.week1.unionFind;

import edu.princeton.cs.algs4.StdIn;

public class Main {
    public static void main(String[] args) {
        int elementsCount = StdIn.readInt();
        UnionFind weightedQuickUnion = new WeightedQuickUnion(elementsCount);
        UnionFind quickUnion = new QuickUnion(elementsCount);
        UnionFind quickFind = new QuickFind(elementsCount);

        while(!StdIn.isEmpty()) {
            int from = StdIn.readInt();
            int to = StdIn.readInt();

            if (!weightedQuickUnion.connected(from, to)) {
                weightedQuickUnion.union(from, to);
            }

            if (!quickUnion.connected(from, to)) {
                quickUnion.union(from, to);
            }

            if (!quickFind.connected(from, to)) {
                quickFind.union(from, to);
            }
        }

        System.out.println("Weighted quick union components: " + weightedQuickUnion.getComponentsCount());
        System.out.println("Quick union components: " + quickUnion.getComponentsCount());
        System.out.println("Quick find components: " + quickFind.getComponentsCount());
    }
}
