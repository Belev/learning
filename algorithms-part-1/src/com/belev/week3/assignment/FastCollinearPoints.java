package com.belev.week3.assignment;

import java.util.Arrays;
import java.util.ArrayList;
import java.util.TreeSet;
import java.util.List;
import java.util.Set;

public class FastCollinearPoints {
    private Point[] points;
    private LineSegment[] segments;

    public FastCollinearPoints(Point[] points) {
        validatePoints(points);
        System.arraycopy(points, 0, this.points, 0, points.length);
        segments = getCollinearSegments();
    }

    public int numberOfSegments() {
        return segments.length;
    }

    public LineSegment[] segments() {
        return segments;
    }

    private void validatePoints(Point[] inputPoints) {
        if (inputPoints == null) {
            throw new NullPointerException();
        }

        Set<Point> pointsSet = new TreeSet<Point>();
        for (Point point : inputPoints) {
            if (point == null) {
                throw new NullPointerException();
            }
            if (!pointsSet.add(point)) {
                throw new IllegalArgumentException();
            }
        }
    }

    private LineSegment[] getCollinearSegments() {
        List<LineSegment> result = new ArrayList<LineSegment>();

        Arrays.sort(points);

        int length = points.length;
        Point[] sortedBySlopeOrder = new Point[length];

        for (int i = 0; i < length - 3; i++) {
            for (int j = i; j < length; j++) {
                sortedBySlopeOrder[j] = points[j];
            }
            Arrays.sort(sortedBySlopeOrder, 0, i, sortedBySlopeOrder[i].slopeOrder());
            Arrays.sort(sortedBySlopeOrder, i + 1, length, sortedBySlopeOrder[i].slopeOrder());

            int first = i + 1;
            int last = i + 2;
            int previousFirst = 0;

            while (last < length) {
                // find last element with equal slope to the first
                double firstSlope = sortedBySlopeOrder[i].slopeTo(sortedBySlopeOrder[first]);
                while (last < length && firstSlope == sortedBySlopeOrder[i].slopeTo(sortedBySlopeOrder[last])) {
                    last++;
                }

                if (last - first >= 3) {
                    // check for overlapping or duplicate segment
                    double previousFirstSlope = Double.NEGATIVE_INFINITY;
                    while (previousFirst < i) {
                        previousFirstSlope = sortedBySlopeOrder[i].slopeTo(sortedBySlopeOrder[previousFirst]);
                        if (previousFirstSlope < firstSlope) {
                            previousFirst++;
                        } else {
                            break;
                        }
                    }

                    if (previousFirstSlope != firstSlope) {
                        result.add(new LineSegment(sortedBySlopeOrder[i], sortedBySlopeOrder[last - 1]));
                    }
                }
                first = last;
                last++;
            }
        }

        LineSegment[] resultArray = new LineSegment[result.size()];
        for (int i = 0; i < result.size(); i++) {
            resultArray[i] = result.get(i);
        }
        return resultArray;
    }
}
