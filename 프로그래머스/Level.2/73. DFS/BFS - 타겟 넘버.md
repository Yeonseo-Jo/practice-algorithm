# DFS/BFS - 타겟 넘버

### [ 문제 정보 ]
> **프로그래머스**: https://school.programmers.co.kr/learn/courses/30/lessons/43165
> 
> **난이도**: 2
>
> **유형**: #깊이/너비 우선 탐색 (DFS/BFS)


### [ 문제 풀이 ]
```JavaScript
function solution(numbers, target) {
    let answer = 0
    
    const getTargetNumber = (currentIdx, sum) => {
        if (currentIdx === numbers.length){
            if (sum === target) {
                answer += 1
            }
            return
        }
        
        getTargetNumber(currentIdx + 1, sum + numbers[currentIdx])
        getTargetNumber(currentIdx + 1 , sum - numbers[currentIdx])
    }
    
    getTargetNumber(0, 0)
    
    return answer
}
```


---
@www.codrive.co.kr