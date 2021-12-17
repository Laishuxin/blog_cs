function quickPower(a, b) {
  if (!a) return 0

  let res = 1
  while (b) {
    if (b & 1) res = res * a
    a = a * a
    b = b >> 1
  }
  return res
}
const res = quickPower(3, 5)
console.log(res)
