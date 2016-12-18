#include <iostream>

using namespace std;

void update(int* first, int* second) {
    int temp = *first;
    *first = *first + *second;
    *second = abs(temp - *second);
}

int main() {
    int first, second;
    cin >> first >> second;
    update(&first, &second);
    cout << first << endl << second << endl;
    return 0;
}
