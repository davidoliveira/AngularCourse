export interface IUserCreate {
    email: string;
    password: string;
    name: string;
    condominiumId: number;
    emailVerified: number;
}

export class UserCreate implements IUserCreate {
  condominiumId: number;
  emailVerified: number;

  constructor(
      public email: string,
      public password: string,
      public name: string
  ) {
    this.condominiumId = 1;
    this.emailVerified = 1;
  }
}
