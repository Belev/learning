#include <iostream>

using namespace std;

inline void use_io_optimizations() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
}

int main() {
    use_io_optimizations();

    int a0, a1, a2, b0, b1, b2;
    cin >> a0 >> a1 >> a2 >> b0 >> b1 >> b2;

    int aliceScore = (a0 > b0) + (a1 > b1) + (a2 > b2);
    int bobScore = (b0 > a0) + (b1 > a1) + (b2 > a2);

    cout << aliceScore << ' ' << bobScore << endl;

    return 0;
}
