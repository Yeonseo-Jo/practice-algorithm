/**
 * 삽입 정렬(insertion sort) : 시간복잡도: O(n^2) - 최선의 경우 O(n)
 *  1. 배열의 두번째 원소부터 시작(정렬되지 않은 영역), 첫번째 원소(정렬된 영역)와 비교
 *  2. 첫번째 원소보다 작은 경우, 첫번째 원소와 위치 교환
 *  3. 나머지 원소도 위 과정 반복 (정렬된 배열 부분에서 자신의 위치 찾아 삽입)
 *
 * **/

// Solution 1
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
}

// Solution 2
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      // 인덱스 j부터 1까지 1씩 감소하며 반복
      if (arr[j] < arr[j - 1]) {
        // 한 칸씩 왼쪽으로 이동
        // swap
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      } else {
        // 자기보다 작은 데이터를 만나면 그 위치에서 멈춤
        break;
      }
    }
  }
}
