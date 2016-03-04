package com.belev.week1.assignment;

import edu.princeton.cs.algs4.StdIn;
import edu.princeton.cs.algs4.StdRandom;
import edu.princeton.cs.algs4.StdStats;

public class PercolationStats {
    private double[] threshold;

    public PercolationStats(int gridSize, int experimentsCount) {
        int openCount;
        int row;
        int column;

        if (gridSize <= 0 || experimentsCount <= 0) {
            throw new IllegalArgumentException("Arguments out of bound");
        }

        threshold = new double[experimentsCount];

        openCount = 0;
        for (int i = 0; i < experimentsCount; i++) {
            Percolation percolation = new Percolation(gridSize);
            do {
                row = StdRandom.uniform(1, gridSize + 1);
                column = StdRandom.uniform(1, gridSize + 1);
                if (percolation.isOpen(row, column)) {
                    continue;
                }
                percolation.open(row, column);
                openCount++;
            } while (!percolation.percolates());

            threshold[i] = (double) openCount / (gridSize * gridSize);
            openCount = 0;
        }
    }

    public double mean() {
        return StdStats.mean(threshold);
    }

    public double stddev() {
        return StdStats.stddev(threshold);
    }

    private double halfInterval() {
        return 1.96 * stddev() / Math.sqrt(threshold.length);
    }

    public double confidenceLo() {
        return mean() - halfInterval();
    }

    public double confidenceHi() {
        return mean() + halfInterval();
    }

    public static void main(String[] args) {
        PercolationStats percolationStats = new PercolationStats(StdIn.readInt(), StdIn.readInt());

        System.out.printf("mean                      = %f\n", percolationStats.mean());
        System.out.printf("stddev                    = %f\n", percolationStats.stddev());
        System.out.printf("95%% confidence Interval  = %f, %f\n", percolationStats.confidenceLo(), percolationStats.confidenceHi());
    }
}
