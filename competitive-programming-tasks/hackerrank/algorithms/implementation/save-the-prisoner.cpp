#include <iostream>

using namespace std;

unsigned findPrisonerWithPoisonedSweet(unsigned prisonersCount, unsigned sweetsCount, unsigned prisonerId) {
    unsigned result = (prisonerId + sweetsCount - 1) % prisonersCount;
    return result == 0 ? prisonersCount : result;
}

int main() {
    unsigned testCasesCount;
    cin >> testCasesCount;

    for (int i = 0; i < testCasesCount; ++i) {
        unsigned prisonersCount, sweetsCount, prisonerId;
        cin >> prisonersCount >> sweetsCount >> prisonerId;
        cout << findPrisonerWithPoisonedSweet(prisonersCount, sweetsCount, prisonerId) << endl;
    }
    return 0;
}
