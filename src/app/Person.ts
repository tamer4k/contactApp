export class Person{
  public id!: string;
  public firstName!: string;
  public lastName!: string;
  public phone!: string;
  public email!: string;

  constructor(obj: any) {
    this.id = obj.id;
   this.firstName = obj.firstName;
   this.lastName = obj.lastName;
   this.phone = obj.phone;
   this.email = obj.email;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

