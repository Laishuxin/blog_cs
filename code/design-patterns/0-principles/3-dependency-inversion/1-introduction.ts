export {}

class Email {
  getMessage() {
    return 'hello person';
  }
}

class Person {
  receive(email: Email) {
    console.log('receive message: ', email.getMessage());
  }
}

function main() {
  const email = new Email();
  new Person().receive(email);
}

main();
