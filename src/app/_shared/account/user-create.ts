export interface IUserCreate {
    email: string;
    password: string;
}

export class UserCreate implements IUserCreate {
    constructor(
        public email: string,
        public password: string
    ) {}
}
