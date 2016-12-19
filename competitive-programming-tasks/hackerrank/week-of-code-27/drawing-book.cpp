#include <iostream>

using namespace std;

int main() {
    int pages, page;
    cin >> pages >> page;
    int pagesToFlip = pages / 2;
    int flippedPagesFromStart = page / 2;
    int flippedPagesFromEnd = (pagesToFlip - flippedPagesFromStart);
    int minimumFlippedPages = (flippedPagesFromEnd > flippedPagesFromStart) ? flippedPagesFromStart : flippedPagesFromEnd;
    cout << minimumFlippedPages << endl;
    return 0;
}
