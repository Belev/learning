package com.belev.week1.assignment;

import edu.princeton.cs.algs4.WeightedQuickUnionUF;

public class Percolation {
    private WeightedQuickUnionUF grid;
    private WeightedQuickUnionUF nonBottomGrid;
    private boolean[] state;
    private int size;

    public Percolation(int size) {
        if (size <= 0) {
            throw new IllegalArgumentException();
        }

        int stateSize = size * size;
        this.size = size;
        grid = new WeightedQuickUnionUF(stateSize + 2);
        nonBottomGrid = new WeightedQuickUnionUF(stateSize + 1);
        state = new boolean[stateSize + 2];

        for (int i = 1; i <= stateSize; i++) {
            state[i] = false;
        }

        // Initialize virtual top and bottom site with open state
        state[0] = true;
        state[stateSize + 1] = true;
    }

    public void open(int row, int col) {
        int stateIndex = rowColToStateIndex(row, col);
        state[stateIndex] = true;

        // connect to open adjacent cells
        if (row != 1 && isOpen(row - 1, col)) {
            grid.union(stateIndex, rowColToStateIndex(row - 1, col));
            nonBottomGrid.union(stateIndex, rowColToStateIndex(row - 1, col));
        }
        if (row != size && isOpen(row + 1, col)) {
            grid.union(stateIndex, rowColToStateIndex(row + 1, col));
            nonBottomGrid.union(stateIndex, rowColToStateIndex(row + 1, col));
        }
        if (col != 1 && isOpen(row, col - 1)) {
            grid.union(stateIndex, rowColToStateIndex(row, col - 1));
            nonBottomGrid.union(stateIndex, rowColToStateIndex(row, col - 1));
        }
        if (col != size && isOpen(row, col + 1)) {
            grid.union(stateIndex, rowColToStateIndex(row, col + 1));
            nonBottomGrid.union(stateIndex, rowColToStateIndex(row, col + 1));
        }

        // connect to corresponding virtual site.
        if (isTopSite(stateIndex)) {
            grid.union(0, stateIndex);
            nonBottomGrid.union(0, stateIndex);
        }
        if (isBottomSite(stateIndex)) {
            grid.union(state.length - 1, stateIndex);
        }
    }

    public boolean isOpen(int row, int col) {
        int stateIndex = rowColToStateIndex(row, col);
        return state[stateIndex];
    }

    public boolean isFull(int row, int col) {
        int stateIndex = rowColToStateIndex(row, col);
        return grid.connected(0, stateIndex) && nonBottomGrid.connected(0, stateIndex);
    }

    public boolean percolates() {
        return grid.connected(0, state.length - 1);
    }

    private int rowColToStateIndex(int row, int col) {
        if (row <= 0 || row > size || col <= 0 || col > size) {
            throw new IndexOutOfBoundsException();
        }
        return (row - 1) * size + col;
    }

    private boolean isTopSite(int index) {
        return index <= size;
    }

    private boolean isBottomSite(int index) {
        return index >= (size - 1) * size + 1;
    }
}
