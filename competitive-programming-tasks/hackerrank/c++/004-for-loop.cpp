#include <iostream>

using namespace std;

int main() {
    const string digitMap[] = {"even", "odd", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"};
    unsigned int start, end;
    cin >> start >> end;

    for (unsigned int number = start; number <= end; ++number) {
        unsigned int mapIndex = number > 9 ? (number % 2) : (number + 1);
        cout << digitMap[mapIndex] << endl;
    }

    return 0;
}
