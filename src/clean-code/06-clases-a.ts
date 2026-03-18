(() => {

  // No aplicando el principio de responsabilidad única

  type Gender = 'M' | 'F';
  class Person {
    public birthdate: Date;
    public gender: Gender;
    public name: string;

    constructor(name: string, gender: Gender, birthdate: Date) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  class User extends Person {
    private readonly lastAccess: Date;

    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthdate: Date,
    ) {
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date,
    ) {
      super(email, role, name, gender, birthdate);
    }
  }

  const person = new Person('Joan', 'M', new Date('1999-04-23'));
  console.log({ person });

  const userSettings = new UserSettings('usr/home', 'home', 'john@example.com', 'admin', 'John Doe', 'M', new Date('1990-01-01'));
  console.log({ userSettings });

})();