class MinHeap {
  constructor() {
    // 힙을 저장할 배열
    this.heap = [];
  }

  /******* (1) 힙 자료구조 골격(완전 이진 트리) 만드는 메서드 *******/
  // 부모 노드의 인덱스 계산
  getParent(index) {
    return Math.floor((index - 1) / 2);
  }

  // 왼쪽 자식 노드의 인덱스 계산
  getLeftChild(index) {
    return index * 2 + 1;
  }

  // 오른쪽 자식 노드의 인덱스 계산
  getRightChild(index) {
    return index * 2 + 2;
  }

  /*******  (2) 힙 정렬 관련 메서드 *******/
  // 값 삽입 후 부모와 비교하여 최소 힙 속성을 유지
  bubbleUp() {
    let targetIndex = this.size() - 1; // 새로 삽입된 값의 인덱스
    while (targetIndex > 0) {
      const parentIndex = this.getParent(targetIndex); // 부모 노드의 인덱스
      if (this.heap[parentIndex] <= this.heap[targetIndex]) break; // 부모가 더 작으면 종료
      this.swap(targetIndex, parentIndex); // 부모와 교환
      targetIndex = parentIndex; // 타겟 인덱스를 부모로 업데이트
    }
  }

  // 루트 값 제거 후 자식과 비교하여 최소 힙 속성을 유지
  bubbleDown() {
    let targetIndex = 0; // 루트부터 시작
    while (this.getLeftChild(targetIndex) < this.size()) {
      const leftChildIndex = this.getLeftChild(targetIndex); // 왼쪽 자식 인덱스
      const rightChildIndex = this.getRightChild(targetIndex); // 오른쪽 자식 인덱스
      const smallerChildIndex =
        rightChildIndex < this.size() &&
        this.heap[rightChildIndex] < this.heap[leftChildIndex]
          ? rightChildIndex
          : leftChildIndex; // 더 작은 자식을 선택

      if (this.heap[targetIndex] <= this.heap[smallerChildIndex]) break; // 부모가 더 작으면 종료

      this.swap(targetIndex, smallerChildIndex); // 자식과 교환
      targetIndex = smallerChildIndex; // 타겟 인덱스를 자식으로 업데이트
    }
  }

  /******* (3) 힙 삽입, 삭제 연산 관련 메서드 *******/
  // 힙 요소 교환
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  // 힙이 비어있는지 확인
  isEmpty() {
    return this.size() === 0;
  }

  // 힙 크기 반환
  size() {
    return this.heap.length;
  }

  // 힙의 루트 값 반환 (최소값)
  peek() {
    return this.heap[0] ?? null; // 힙이 비어 있으면 null 반환
  }

  // 힙에 값 삽입
  heapPush(value) {
    this.heap.push(value); // 배열의 끝에 새 값을 추가
    this.bubbleUp(); // 힙의 정렬 조건(완전 이진 트리 + 최소 힙 속성)을 유지
  }

  // 힙에서 최소값(루트 값) 제거 및 반환
  heapPop() {
    if (this.isEmpty()) return null; // 힙이 비어 있다면 null 반환

    const minValue = this.heap[0]; // 루트 값을 저장
    this.heap[0] = this.heap[this.size() - 1]; // 마지막 값을 루트로 이동
    this.heap.pop(); // 배열의 마지막 요소 제거
    this.bubbleDown(); // 힙 정렬 조건 유지

    return minValue; // 최소값 반환
  }
}
