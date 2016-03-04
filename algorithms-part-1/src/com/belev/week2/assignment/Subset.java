package com.belev.week2.assignment;

import edu.princeton.cs.algs4.StdIn;
import edu.princeton.cs.algs4.StdOut;

public class Subset {
    public static void main(String[] args) {
        int k = Integer.parseInt(args[0]);
        RandomizedQueue<String> queue = new RandomizedQueue<String>();

        while (!StdIn.isEmpty()) {
            queue.enqueue(StdIn.readString());
        }

        int size = queue.size();
        for (int i = 0; i < size - k; i++) {
            queue.dequeue();
        }

        for (String str : queue) {
            StdOut.println(str);
        }
    }
}
