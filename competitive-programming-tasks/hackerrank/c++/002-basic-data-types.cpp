#include <cstdio>

using namespace std;

int main() {
    int intNum;
    long longNum;
    long long longLongNum;
    char character;
    float floatNum;
    double doubleNum;
    scanf("%d %ld %lld %c %f %lf", &intNum, &longNum, &longLongNum, &character, &floatNum, &doubleNum);
    printf("%d\n%ld\n%lld\n%c\n%f\n%lf", intNum, longNum, longLongNum, character, floatNum, doubleNum);
    return 0;
}
