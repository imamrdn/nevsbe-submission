#include <iostream>
using namespace std;

void printRules(int n) {
    for (int i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            cout << "catKitty";
        } else if (i % 3 == 0) {
            cout << "cat";
        } else if (i % 5 == 0) {
            cout << "kitty";
        } else {
            cout << i;
        }

        if (i != n) cout << ", ";
    }
    cout << endl;
}

void addRule(int n, int ruleNum, string ruleWord) {
    for (int i = 1; i <= n; i++) {
        bool printed = false;

        if (i % ruleNum == 0) {
            cout << ruleWord;
            printed = true;
        } else if (i % 3 == 0 && i % 5 == 0) {
            cout << "catKitty";
            printed = true;
        } else if (i % 3 == 0) {
            cout << "cat";
            printed = true;
        } else if (i % 5 == 0) {
            cout << "kitty";
            printed = true;
        }

        if (!printed) {
            cout << i;
        }

        if (i != n) cout << ", "; 
    }
    cout << endl;
}

int main() {
    int n;
    cout << "Masukkan angka maksimum (n): ";
    cin >> n;

    printRules(n);

    int newNumb;
    string newWord;
    cout << "\nMasukkan angka untuk aturan baru: ";
    cin >> newNumb;
    cout << "Masukkan kata untuk aturan baru: ";
    cin >> newWord;

    cout << "\nDengan aturan tambahan (" << newNumb << " -> " << newWord << "):" << endl;
    addRule(n, newNumb, newWord);

    return 0;
}

