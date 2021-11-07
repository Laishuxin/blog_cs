---
title: 数据结构与算法 - 排序
time: 2021-11-07
author: ru shui
category: data structure and algorithms
tag:
  - sort
visitor: false
article: true
sticky: false
---

## 快速排序

```cpp
using namespace std;
void quickSort(int arr[], int l, int r) {
  if (l >= r) return;
  int x = arr[l + r >> 1], i = l - 1, j = r + 1;
  while (i < j) {
    do i++; while (arr[i] < x);
    do j--; while (arr[j] > x);
    if (i < j) swap(arr[i], arr[j]);
  }
  quickSort(arr, l, j);
  quickSort(arr, j + 1, r);
}
```

## 归并排序

```cpp
void mergeSort(int arr[], int l, int r) {
  if (l >= r) return;
  int tmp[r - l + 1];
  int mid = l + r >> 1;
  mergeSort(arr, l, mid);
  mergeSort(arr, mid + 1, r);

  int i = l, j = mid + 1, k = 0;
  while (i <= mid && j <= r)
    arr[i] <= arr[j] ? tmp[k++] = arr[i++] : tmp[k++] = arr[j++];

  while (i <= mid) tmp[k++] = arr[i++];
  while (j <= r) tmp[k++] = arr[j++];

  for (i = l, j = 0; i <= r; i++, j++)
    arr[i] = tmp[j];
}
```
