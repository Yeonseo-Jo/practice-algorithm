/******
 * 1.
 * 일반 순열 (중복 허용 x)
 *  ******/
// 선별배열, 빈배열, 결과배열
const permutation = (permu, rests, output) => {
  // 잔여배열이 하나도 남지 않으면 재귀 호출 종료
  if (rests.length === 0) {
    return output.push(permu);
  }
  rests.forEach((v, idx) => {
    // 잔여배열을 선별된 원소 제외 된 잔여 배열로 정의
    const rest = [...rests.slice(0, idx), ...rests.slice(idx + 1)];
    permutation([...permu, v], rest, output);
  });
};

// const output = [];
// permutation([], ["a", "b", "c", "d"], output);
// console.log(output);

/******
 * 2.
 * 중복 순열
 *  ******/

const permutationWithDup = (permu, rests, output, length) => {
  // 원하는 길이에 도달하면 재귀 호출 종료
  if (permu.length === length) {
    return output.push(permu);
  }

  rests.forEach((v) => {
    // 잔여 배열을 그대로 사용하며 중복을 허용
    permutationWithDup([...permu, v], rests, output, length);
  });
};

// const output = [];
// const elements = ["a", "b", "c", "d"];
// const n = 3; // 중복 순열의 길이
// permutationWithDup([], elements, output, n);
// console.log(output);
