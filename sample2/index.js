function createUser(name, age, isAdmin) {
  return {
    name: name,
    age: age,
    isAdmin: isAdmin,
  };
}

const user = createUser("Alice", 30, "true");
console.log(user); // { name: 'Alice', age: 30, isAdmin: 'true' }

// createUser(30, "Alice")
