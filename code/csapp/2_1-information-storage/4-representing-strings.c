#include <stdio.h>
#include <string.h>

typedef  unsigned char *byte_pointer;
void show_bytes(byte_pointer start, size_t len) {
  int i;
  for (i = 0; i < len; i++) {
    printf(" %.2x", start[i]);
  }
  printf("\n");
}

void practice_problem_2_7() {
  const char *m = "mnopqr";
  show_bytes((byte_pointer) m, strlen(m));
}

int main() {
  practice_problem_2_7();
  return 0;
}