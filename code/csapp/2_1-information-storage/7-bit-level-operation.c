#include <stdio.h>
void printf_array(int *arr, int count) {
  int i;
  for (i = 0; i < count; i++) {
    printf("%d ", arr[i]);
  }
  printf("\n");
}

void inplace_swap(int *x, int *y) {
  *y = *x ^ *y; /* step 1*/ 
  *x = *x ^ *y; /* step 2*/
  *y = *x ^ *y; /* step 3*/
}

void test_inplace_swap() {
  int a = 10;
  int b = 20;
  printf("origin: a = %d, b = %d\n", a, b);
  inplace_swap(&a, &b);
  printf("swapped: a = %d, b = %d\n", a, b);
}

void reverse_array(int *arr, int count) {
  int first, last;
  for (
    first = 0, last = count - 1;
    first < last;
    first++, last--
  ) {
    inplace_swap(&arr[first], &arr[last]);
  }
}

void test_reverse_array() {
  int arr1[] = {1, 2, 3, 4};
  int arr2[] = {1, 2, 3, 4, 5};
  printf("origin arr1: ");
  printf_array(arr1, sizeof(arr1) / sizeof(int));
  printf("origin arr2: ");
  printf_array(arr2, sizeof(arr2) / sizeof(int));

  reverse_array(arr1, sizeof(arr1) / sizeof(int));
  reverse_array(arr2, sizeof(arr2) / sizeof(int));

  printf("reversed arr1: ");
  printf_array(arr1, sizeof(arr1) / sizeof(int));
  printf("reversed arr2: ");
  printf_array(arr2, sizeof(arr2) / sizeof(int));
}

int main() {
  // test_inplace_swap();
  // test_reverse_array();
  int a = 0X12;
  int b = ~a;
  printf("b = %x\n", b);
  return 0;
}
