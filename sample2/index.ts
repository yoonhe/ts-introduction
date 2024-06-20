// 위 코드에서 User 인터페이스를 사용하여 객체의 구조를 명확히 정의하였고,
// createUser 함수는 이를 따르도록 하여 코드의 가독성과 유지보수성을 향상시킵니다.

interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

function createUser(
  name: string,
  age: number,
  isAdmin: boolean
): User {
  return {
    name: name,
    age: age,
    isAdmin: isAdmin,
  };
}

// 타입 오류 발생: "Argument of type 'string' is not assignable to parameter of type 'boolean'."
const user: User = createUser("Alice", 30, "true");
console.log(user);
