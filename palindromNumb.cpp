#include <iostream>
using namespace std;

bool isPalindrome(int x) {
    if (x < 0) return false;

    int original = x;
    int reversed = 0;

    while (x > 0) {
        int digit = x % 10;
        reversed = reversed * 10 + digit;
        x /= 10;
    }
    
    return original == reversed;
}

int main() {
    int x;
    cout << "Masukkan angka: ";
    cin >> x;
    
    if (isPalindrome(x)) {
        cout << x << " adalah palindrome (true)" << endl;
    } else {
        cout << x << " bukan palindrome (false)" << endl;
    }
    
    return 0;
}

