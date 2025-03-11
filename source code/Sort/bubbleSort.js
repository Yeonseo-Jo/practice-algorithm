/**
 * 버블 정렬(Bubble Sort): 시간복잡도: O(n^2) - 최선의 경우 O(n)
 *  1. 배열의 모든 요소를 순차적으로 비교하여 인접한 두 요소를 교환
 *  2. 한 패스가 끝날 때 가장 큰 요소가 배열의 끝으로 이동
 *  3. 교환이 발생하지 않을 경우 배열이 이미 정렬된 상태이므로 종료
 *  4. 배열 길이가 1이 될 때까지 반복하며 정렬
 *
 *  최적화: 교환 여부를 추적하여 교환이 없으면 반복 종료 (정렬 완료)
 **/
function bubbleSort(arr) {
  // 변수 noSwaps는 배열이 이미 정렬된 경우 반복을 멈추기 위해 사용
  let noSwaps;

  // 배열을 끝에서부터 줄여가며 반복
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true; // 초기화: 이번 패스에서 교환이 발생하지 않음을 가정

    // 인접한 두 원소를 비교하여 정렬
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // 두 원소의 위치를 교환
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false; // 교환이 발생했으므로 정렬되지 않은 상태
      }
    }

    // 교환이 없었다면 배열이 이미 정렬된 상태이므로 반복 종료
    if (noSwaps) break;
  }

  // 정렬된 배열 반환
  return arr;
}
