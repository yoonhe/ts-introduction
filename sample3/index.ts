// 타입스크립트는 인터페이스를 사용하여 객체의 속성을 정의하고, 개발 도구의 자동 완성과 타입 검사를 통해 잘못된 속성 접근을 컴파일 시점에 잡아냅니다. 이는 디버깅 시간을 줄이고, 코드 품질을 높이는 데 도움을 줍니다.
// 이와 같이 타입스크립트는 정적 타입 검사, 코드 가독성 및 유지보수성 향상, 강력한 개발 도구 지원 등을 통해 자바스크립트의 단점을 보완하여 더 안전하고 효율적인 개발 환경을 제공합니다.

interface Person {
  firstName: string;
  lastName: string;
}

let person: Person = {
  firstName: "John",
  lastName: "Doe",
};

// 컴파일 오류 발생: "Property 'firstname' does not exist on type 'Person'. Did you mean 'firstName'?"
console.log(person.firstname);
