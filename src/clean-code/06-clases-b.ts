(() => {

  // No aplicando el principio de responsabilidad única

  type Gender = 'M' | 'F';

  interface PersonProps {
    birthdate: Date;
    gender: Gender;
    name: string;
  }

  class Person {
    public birthdate: Date;
    public gender: Gender;
    public name: string;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    name: string;
    role: string;
  }
  class User extends Person {
    private readonly lastAccess: Date;
    public email: string;
    public role: string;

    constructor({ email, role, birthdate, gender, name }: UserProps) {
      super({ birthdate, gender, name });
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  interface UserSettingsProps {
    birthdate: Date,
    email: string,
    gender: Gender,
    lastOpenFolder: string,
    name: string,
    role: string,
    workingDirectory: string,
  }
  class UserSettings extends User {
    public lastOpenFolder: string;
    public workingDirectory: string;
    constructor({
      workingDirectory,
      lastOpenFolder,
      email,
      role,
      name,
      gender,
      birthdate
    }: UserSettingsProps) {
      super({ email, role, name, gender, birthdate });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  const userSettings = new UserSettings({
    lastOpenFolder: 'usr/home',
    workingDirectory: '/home',
    email: 'john@example.com',
    role: 'admin',
    name: 'John Doe',
    gender: 'M',
    birthdate: new Date('1990-01-01')
  });

  console.log({ userSettings });

})();