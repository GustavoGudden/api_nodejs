class Person {
  constructor(name) {
    this.name = name;
  }
  saymyname() {
    return `meu nome é ${this.name} `;
  }
}

module.exports = {
  Person,
};
