package com.belev.week3.assignment;

import java.util.Comparator;
import edu.princeton.cs.algs4.StdDraw;

public class Point implements Comparable<Point> {
    private int x;
    private int y;

    private Comparator<Point> slopeOrder;

    public Point(int x, int y) {
        this.x = x;
        this.y = y;
        slopeOrder = new SlopeOrder();
    }

    public void draw() {
        StdDraw.point(x, y);
    }

    public void drawTo(Point that) {
        StdDraw.line(this.x, this.y, that.x, that.y);
    }

    public double slopeTo(Point that) {
        if (this.x == that.x && this.y == that.y) {
            /* treat the slope of a degenerate line segment as negative infinity. */
            return Double.NEGATIVE_INFINITY;
        } else if (this.x == that.x) {
            /* treat the slope of a vertical line segment as positive infinity */
            return Double.POSITIVE_INFINITY;
        } else if (this.y == that.y) {
            /* treat the slope of a horizontal line segment as positive zero */
            return +0.0;
        }
        return (double) (that.y - this.y) / (that.x - this.x);
    }

    public int compareTo(Point other) {
        return this.y != other.y ? this.y - other.y : this.x - other.x;
    }

    public Comparator<Point> slopeOrder() {
        return slopeOrder;
    }

    public String toString() {
        return "(" + x + ", " + y + ")";
    }

    private class SlopeOrder implements Comparator<Point> {
        public int compare(Point a, Point b) {
            Double aSlope = slopeTo(a);
            Double bSlope = slopeTo(b);

            return aSlope.compareTo(bSlope);
        }
    }
}
