#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
    int clusters, buttonPrice;
    cin >> clusters >> buttonPrice;
    vector<int> clusterMinPrice(clusters);
    for (int i {0}; i < clusters; ++i) {
        cin >> clusterMinPrice[i];
    }

    sort(clusterMinPrice.begin(), clusterMinPrice.end());

    int minButtonsForPrice {0};
    int previousMinButtonsForPrice {0};
    long long result {0};
    for (int i {0}; i < clusters; ++i) {
        minButtonsForPrice = clusterMinPrice[i] / buttonPrice + (clusterMinPrice[i] % buttonPrice != 0 ? 1 : 0);
        if (minButtonsForPrice > previousMinButtonsForPrice) {
            result += minButtonsForPrice;
            previousMinButtonsForPrice = minButtonsForPrice;
        } else {
            previousMinButtonsForPrice++;
            result += previousMinButtonsForPrice;
        }
    }

    cout << result << endl;

    return 0;
}
