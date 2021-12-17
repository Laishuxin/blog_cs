---
title: 数据结构与算法 - 位运算
time: 2021-12-17
author: ru shui
category: data structure and algorithms
tag:
  - bit
visitor: false
article: true
sticky: false
---

在很多编程语言中都支持幂运算。如果让我们实现一个幂运算，我们可能会通过如下的方式。

```cpp
long long power(int a, int b) {
  long long res = 1;
  for (int i = 0; i < b; i++) {
    res = res * a;
  }
  return res;
}
```

但是，这样做的复杂度达到 O(b)。考虑下面的情况：

计算 $3 ^ 5$。

$3 ^ 1 = 3$
$3 ^ 2 = 9$
$3 ^ 3 = 27 = (3 ^ 1 * 3 ^ 2)$
$3 ^ 4 = 81$
$3 ^ 5 = (3 ^ 1 * 3 ^ 4)$

可以看出，我们使用循环会多出不必要的计算。为了减少不必要的计算，我们可以采用快速幂进行。

## 快速幂

在计算机底层对于一个数是采用二进制补码实现的，对于 5 的二进制为 $101_b$。也就是
$5 = 2^2 \times 1 + 2 ^ 1 \times 0 + 2^ 0 \times 1$

所以，$3 ^ 5 = 3 ^{2 ^ 2 + 2 ^ 0}$。

根据这个原理我们就可以来实现快速幂算法：

```cpp
#include <iostream>
using namespace std;
typedef long long ll;

ll quickPower(int a, int b) {
  ll res = 1;
  while (b) {
    if (b & 1) {
      res = res * a;
    }
    a = a * 1ll * a; // 避免溢出
    b = b >> 1;
  }
  return res;
}


int main() {
  ll res = quickPower(3, 5);
  cout << res;
  return 0;
}
```

## 快速幂取模

计算 $a ^ b \% p$

快速幂取模的原理和快速幂相似，只是模运算的法则，每次进行乘法的时候也取模，避免
溢出。

```cpp
#include <iostream>
using namespace std;

typedef long long ll;
ll quick(int a, int b, int p) {
  ll res = 1 % p;
  while (b) {
    if (b & 1) {
      res = res * a % p;
    }

    a = a * 1ll * a % p;

    b = b >> 1;
  }

  return res;
}

int main() {
  int a, b, p;
  cin >> a >> b >> p;
  cout << quick(a, b, p);

  return 0;
}
```
