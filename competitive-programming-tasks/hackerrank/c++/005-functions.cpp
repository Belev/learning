#include <iostream>

using namespace std;

int maxOfFour(int first, int second, int third, int fourth) {
    return max(max(max(first, second), third), fourth);
}

int main() {
    int first, second, third, fourth;
    cin >> first >> second >> third >> fourth;
    cout << maxOfFour(first, second, third, fourth);
    return 0;
}
