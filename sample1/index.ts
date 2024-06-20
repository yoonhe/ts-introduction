// add 함수는 number 타입의 매개변수를 받도록 정의되어 있습니다.
// 컴파일 시 string 타입의 인수가 전달되면 오류가 발생하여 런타임 오류를 방지할 수 있습니다.

function add(a: number, b: number): number {
  return a + b;
}

// 타입 오류 발생: "Argument of type 'string' is not assignable to parameter of type 'number'."
console.log(add(5, "10"));
