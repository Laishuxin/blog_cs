---
title: 数据结构与算法 - 高精度算法
time: 2021-11-13
author: ru shui
category: data structure and algorithms
tag:
  - high precision
visitor: false
article: true
sticky: false
---

## 高精度减法

输入：两个大正整数（以字符串的形式） A 和 B。
输出：两个大整数相减的结果。

思路：

1. 假设 A >= B。结果为 `sub(A, B)`，表示 A - B。对于 A < B 我们只需要将 A、B 对换位置同时加上负号即可。
2. 用一个整数 t 保存**低位**相减的结果。

   ```cpp
   // init
   int t = 0;
   t = A[i] - B[i] - t; // 需要控制 i 在 A.size() 和 B.size() 范围内。如果超过范围，默认 A[i] = 0, B[i] = 0

   // 在下一轮计算的时候，
   res[i] = (t + 10) %10;
   t = t < 0 ? 1 : 0;
   ```

3. 删除多余的高位 0。

代码如下：

```cpp
#include <iostream>
#include <cstdio>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

// A >= B?
bool cmp(vector<int> &A, vector<int> &B) {
    if (A.size() != B.size())
        return A.size() > B.size();

    for (int i = A.size() - 1; i >= 0; i--) {
        if (A[i] != B[i])
            return A[i] > B[i];
    }

    return true;
}

vector<int> sub(vector<int> &A, vector<int> &B) {
    vector<int> res;
    int t = 0;

    // 从高位开始减。
    for (int i = 0; i < A.size(); i++) {
        t = A[i] - t;
        if (i < B.size())
            t = t - B[i];
        res.push_back((t + 10) % 10);
        t = t < 0 ? 1 : 0;
    }

    while (res.size() > 1 && res.back() == 0)
        res.pop_back();
    return res;
}

int main() {
    string a, b;
    vector<int> A, B;
    cin >> a >> b;

    for (int i = a.size() - 1; i >= 0; i--)
        A.push_back(a[i] - '0');
    for (int i = b.size() - 1; i >= 0; i--)
        B.push_back(b[i] - '0');

    if (cmp(A, B)) {
        auto res = sub(A, B);
        for (int i = res.size() - 1; i >= 0; i--)
            cout << res[i];
    } else {
        auto res = sub(B, A);
        printf("-");
        for (int i = res.size() - 1; i >= 0; i--)
            cout << res[i];
    }

    return 0;
}
```
