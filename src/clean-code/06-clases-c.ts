(() => {

  // Aplicando el principio de responsabilidad única
  // Priorizar composicion frente a herencia

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
    email: string;
    role: string;
  }
  class User {
    private readonly lastAccess: Date;
    public email: string;
    public role: string;

    constructor({ email, role }: UserProps) {
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    lastOpenFolder: string,
    workingDirectory: string,
  }
  class Settings {
    public lastOpenFolder: string;
    public workingDirectory: string;
    constructor({
      workingDirectory,
      lastOpenFolder,
    }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
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

  class UserSettings {
    public person: Person;
    public settings: Settings;
    public user: User;

    constructor({
      name, gender, birthdate,
      lastOpenFolder, workingDirectory,
      email, role,
    }: UserSettingsProps) {
      this.person = new Person({ name, gender, birthdate });
      this.settings = new Settings({ lastOpenFolder, workingDirectory });
      this.user = new User({ email, role });
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