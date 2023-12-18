export interface IUser {
  id: string;
  name: string;
  email: string;
  birthday: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}

export class User {
  id: string;
  name: string;
  email: string;
  birthday: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(user: IUser) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.birthday = user.birthday;
    this.phone = user.phone;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
  }
}
