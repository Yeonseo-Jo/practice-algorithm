/**
 * 병합 정렬(Merge Sort): 시간복잡도: O(n log n)
 *  1. 배열을 절반으로 나눠 각각 정렬
 *  2. 재귀적으로 분할된 하위 배열을 정렬
 *  3. 정렬된 배열을 병합(merge)하여 전체를 정렬
 *  4. 더 이상 나눌 수 없을 때(부분 배열 길이 1), 정렬된 상태로 병합 시작
 *
 *  병합 과정에서는 두 정렬된 배열을 비교하면서 하나의 정렬된 배열로 만듦
 **/

function mergeSort(array) {
  // 배열의 길이가 1 이하이면 정렬된 상태이므로 그대로 반환
  if (array.length <= 1) {
    return array;
  }

  // 배열을 중간에서 나누기
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  // 재귀적으로 나눈 배열 정렬
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // 병합하여 정렬된 배열 반환
  return merge(sortedLeft, sortedRight);
}

// 두 배열 병합 함수
function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // 두 배열을 병합하면서 정렬
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // 남은 요소들을 결과에 추가
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// // 사용 예시
// const unsortedArray = [34, 7, 23, 32, 5, 62];
// const sortedArray = mergeSort(unsortedArray);
// console.log(sortedArray); // [5, 7, 23, 32, 34, 62]
