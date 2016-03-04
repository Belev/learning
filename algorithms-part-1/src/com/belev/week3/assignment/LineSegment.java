package com.belev.week3.assignment;

public class LineSegment {
    private Point p;
    private Point q;

    public LineSegment(Point p, Point q) {
        if (p == null || q == null) {
            throw new NullPointerException("p and q can not be null");
        }
        this.p = p;
        this.q = q;
    }

    public void draw() {
        p.drawTo(q);
    }

    public String toString() {
        return p + " -> " + q;
    }

    public int hashCode() {
        throw new UnsupportedOperationException();
    }
}
