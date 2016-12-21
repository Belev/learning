#include <iostream>
#include <vector>

using namespace std;

inline void use_io_optimizations() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
}

long rotatedDifference[4] {0L, -1L, -1L, -1L};

vector<vector<bool>> constructMatrix(unsigned size) {
    vector<bool> hackonacciIsOddMap {1, 1, 0, 1, 0, 0, 1};

    vector<vector<bool>> matrix (size, vector<bool>(size));
    for (int row {0}; row < size; ++row) {
        for (int col {0}; col < size; ++col) {
            matrix[row][col] = hackonacciIsOddMap[((row + 1L) * (col + 1L) * (row + 1L) * (col + 1L)) % 7];
        }
    }
    return matrix;
}


bool isDifferentAfterRotation(vector<vector<bool>> const &matrix, unsigned size, int row, int col, int rotationsCount) {
    switch(rotationsCount) {
        case 1: return matrix[row][col] != matrix[col][size - row - 1];
        case 2: return matrix[row][col] != matrix[size - row - 1][size - col - 1];
        case 3: return matrix[row][col] != matrix[size - col - 1][row];
        default: return 0;
    }
}

long findRotationDifference(vector<vector<bool>> const &matrix, unsigned size, int degrees) {
    int rotationsCount = (degrees / 90) % 4;
    if (rotatedDifference[rotationsCount] != -1) {
        return rotatedDifference[rotationsCount];
    }

    long difference {0L};
    for (int row {0}; row < size; ++row) {
        for (int col {0}; col < size; ++col) {
            difference += isDifferentAfterRotation(matrix, size, row, col, rotationsCount);
        }
    }
    rotatedDifference[rotationsCount] = difference;
    return difference;
}

int main() {
    use_io_optimizations();

    unsigned size, queries;
    cin >> size >> queries;

    vector<vector<bool>> matrix = constructMatrix(size);

    int degrees;
    for (int i {0}; i < queries; ++i) {
        cin >> degrees;
        cout << findRotationDifference(matrix, size, degrees) << "\n";
    }

    return 0;
}
