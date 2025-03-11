/******
 * 1.
 * 일반 조합 (중복 허용 x)
 *  ******/
// 선별배열, 빈배열, 결과배열
// 선별배열, 잔여배열, 결과배열
const combination = (comb, rests, output, length) => {
  // 선별된배열이 특정 length 달성 시 재귀 호출 종료
  if (comb.length == length) {
    return output.push(comb);
  }

  rests.forEach((v, idx) => {
    //잔여배열을 선별된 원소의 인덱스 뒤 부분을 잔여배열로
    const rest = rests.slice(idx + 1);
    //선별된 배열에 조회 원소 넣음
    combination([...comb, v], rest, output);
  });
};

// const output = [];
// const n = 3; // 조합의 길이
// combination([], ["a", "b", "c", "d"], output, n);
// console.log(output);

/******
 * 2.
 * 중복 조합
 *  ******/
const combinationWithDup = (comb, rests, output, length) => {
  // 선별된 배열이 특정 길이에 도달하면 종료
  if (comb.length === length) {
    return output.push(comb);
  }

  rests.forEach((v, idx) => {
    // 잔여 배열의 현재 인덱스부터 시작 (중복 허용)
    const rest = rests.slice(idx);
    // 선별된 배열에 현재 원소 추가
    combinationWithDup([...comb, v], rest, output, length);
  });
};

// const output = [];
// const elements = ["a", "b", "c", "d"];
// const n = 3; // 조합의 길이
// permutationWithDup([], elements, output, n);
// console.log(output);
