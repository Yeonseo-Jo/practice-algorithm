/**
 * 위상 정렬(Topological Sort): 시간복잡도: O(|V| + |E|) -> 모든 정점과 간선을 한 번씩 지나므로
 * 1. 방향 그래프의 정점들을 위상 순서로 나열
 * 2. 각 정점마다 indegree(진입 차수)를 계산해 줌
 * 3. indegree가 0인 정점을 큐에 넣어 줌
 * 4. 0인 노드가 가진 노선의 indegree를 1씩 감소해주고, 0이 되면 큐에 넣어줌
 * 5. 큐에서 노드를 하나씩 빼면서 순서대로 나열
 *
 * 위상 정렬은 사이클이 없는 방향 그래프(DAG - directed acyclic graph)에만 적용 가능
 **/

// v : 전체 노드의 개수, e: 입력 받을 간선의 개수, node: 간선 정보

function topologicalSort(v, e, node) {
  let answer = [];
  let graph = Array.from((Array(v + 1), () => Array().fill(0)));
  let indegree = Array(v + 1).fill(0);

  let queue = [];

  for (let [a, b] of node) {
    graph[a].push(b);
    indegree[b]++;
  }

  // 0인 노드를 첫 스타트로 써야 하므로, 0인 노드를 큐에 넣어줌
  for (let i = 1; i < v + 1; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length) {
    let now = queue.shift();
    answer.push(now);

    for (let next of graph[now]) {
      indegree[next]--;
      if (indegree[next] === 0) {
        queue.push(next);
      }
    }
  }

  return answer;
}
