### 1. 힙이란?

- 완전 이진 트리의 일종으로, 정해진 조건에 따라 항상 정렬된 상태를 유지하는 비선형 자료구조

  > 최소 힙(Min-Heap): 부모 노드가 자식 노드보다 작거나 같은 값을 가짐 (루트는 가장 작은 값)

  > 최대 힙(Max-Heap): 부모 노드가 자식 노드보다 크거나 같은 값을 가 (루트는 가장 큰 값)

- 힙은 항상 정렬된 상태를 유지하기 때문에 최대값, 최소값 등을 수시로 조회해야 할 경우 속도상 이점을 가짐
  => 다익스트라(최단경로) 알고리즘이나, 우선순위 큐 구현할 때 사용!

### 2. 힙의 시간 복잡도

- 삽입, 삭제 연산 : `O(log n)`
- 최대, 최소값 조회 : O(1)
- 힙 생성 : O(n)
- cf. sort 정렬 => `O(n log n)`

  => 따라서 input N >= 1,000,000 정도의 시간복잡도를 넘어설 때는 sort 대신 우선순위 큐로 정렬하기
