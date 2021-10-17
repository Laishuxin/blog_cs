module.exports = {}
const testArr = []
for (let i = 0; i < 10; i++) {
  testArr.push(i)
}

function binarySearch(arr, target) {
  if (!Array.isArray(arr)) {
    return -1
  }
  return _binarySearch2(arr, target, 0, arr.length - 1)
}

function _binarySearch1(arr, target, l, r) {
  while (l < r) {
    const mid = (l + r) >>> 1
    if (arr[mid] >= target) {
      r = mid
    } else {
      l = mid + 1
    }
  }

  return arr[l] === target ? l : -1
}

function _binarySearch2(arr, target, l, r) {
  while (l < r) {
    const mid = (l + r + 1) >>> 1
    if (arr[mid] <= target) {
      l = mid
    } else {
      r = mid - 1
    }
  }
  return arr[l] === target ? l : -1
}

function test1() {
  let result
  result = binarySearch(testArr, -1)
  console.log(result, ', answer -1')

  result = binarySearch(testArr, 0)
  console.log(result, ', answer 0')

  result = binarySearch(testArr, 6)
  console.log(result, ', answer 6')

  result = binarySearch(testArr, 9)
  console.log(result, ', answer 9')

  result = binarySearch(testArr, 11)
  console.log(result, ', answer -1')
}

function main() {
  test1()
}

main()
