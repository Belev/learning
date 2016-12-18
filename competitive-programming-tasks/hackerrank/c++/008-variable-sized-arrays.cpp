#include <iostream>

using namespace std;

int main() {
    int linesLength, queries;
    cin >> linesLength >> queries;

    int** lines = new int*[linesLength];
    for (int i = 0; i < linesLength; ++i) {
        int length;
        cin >> length;

        lines[i] = new int[length];
        for (int j = 0; j < length; ++j) {
            cin >> lines[i][j];
        }
    }
    
    for (int i = 0; i < queries; ++i)
    {
        int line, element;
        cin >> line >> element;

        cout << lines[line][element] << endl;
    }

    for (int i = 0; i < linesLength; ++i)
    {
        delete[] lines[i];
    }
    delete[] lines;
    
    return 0;
}
