#include <iostream>

using namespace std;

int main() {
    const string digitMap[] = {"Greater than 9", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"};
    unsigned int number;
    cin >> number;

    unsigned int mapIndex = number > 9 ? 0 : number;
    cout << digitMap[mapIndex] << endl;

    return 0;
}
