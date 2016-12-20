#include <iostream>
#include <limits>
#include <algorithm>

using namespace std;

inline void use_io_optimizations() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
}

int main() {
    use_io_optimizations();

    long sum {0};
    long minNumber {numeric_limits<long>::max()};
    long maxNumber {numeric_limits<long>::min()};

    long number;
    for (int i = 0; i < 5; ++i) {
        cin >> number;
        sum += number;
        minNumber = min(minNumber, number);
        maxNumber = max(maxNumber, number);
    }

    cout << (sum - maxNumber) << ' ' << (sum - minNumber);

    return 0;
}
