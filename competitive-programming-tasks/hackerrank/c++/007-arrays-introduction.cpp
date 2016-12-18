#include <iostream>

using namespace std;

int main() {
    unsigned int length;
    cin >> length;

    unsigned int numbers[length];
    for (int i = 0; i < length; ++i) {
        cin >> numbers[i];
    }

    for (int i = length - 1; i >= 0; --i) {
        cout << numbers[i] << " ";
    }
    return 0;
}
