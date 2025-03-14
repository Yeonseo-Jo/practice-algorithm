/**
 * 계수 정렬(Counting Sort): 시간복잡도: O(n + k)
 *  1. 배열의 최댓값에 기반하여 크기 k+1의 카운트 배열을 생성
 *  2. 입력 배열의 각 요소 값에 해당하는 카운트 배열의 값을 증가
 *  3. 카운트 배열의 인덱스를 반복적으로 읽으며 결과 배열에 요소를 추가
 *  4. 결과 배열을 반환하여 정렬 완료
 *
 *  제한 사항: 정수 배열에만 적용 가능하며, 값의 범위가 작아야 효율적
 *  공간 복잡도는 O(n + k)이며, 안정적인 정렬
 **/
function countingSort(arr) {
  const count = new Array(Math.max(...arr) + 1).fill(0); //최댓값 + 1의 크기만큼 배열 생성
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  for (let i = 0; i < count.length; i++) {
    for (let j = 0; j < count[i]; j++) {
      result.push(i);
    }
  }

  return result;
}

// 모든 원소의 값이 0보다 크거나 같다고 가정
// const arr = [4, 5, 1, 3, 2, 0];
// const sortedArr = countingSort(arr);
// console.log(sortedArr); // [0, 1, 2, 3, 4, 5]
