#include <iostream>
using namespace std;
typedef long long ll;

ll quickPower(int a, int b) {
  ll res = 1;
  while (b) {
    if (b & 1) {
      res = res * a;
    }
    a = a * a;
    b = b >> 1;
  }
  return res;
}


int main() {
  ll res = quickPower(3, 5);
  cout << res;
  return 0;
}
