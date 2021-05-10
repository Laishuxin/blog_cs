#include <stdio.h>

// practice 2.12
int practice_2_12_1(int x) {
  return x & 0xff;
}

int practice_2_12_2(int x) {
  return x ^ ~0xff;
}

int practice_2_12_3(int x){
  return x | 0xff;
}

void practice_2_12() {
  int x;
  x = 0x87654321;

  printf("x = %x\n", x);
  //  The least significant byte of x, with all other bits set to 0. [0x00000021]
  printf("question1: x = %x\n", practice_2_12_1(x));
  printf("question2: x = %x\n", practice_2_12_2(x));
  printf("question3: x = %x\n", practice_2_12_3(x));
}


int main() {
  practice_2_12();
  return 0;
}
