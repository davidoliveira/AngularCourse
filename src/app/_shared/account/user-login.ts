export interface IUserLogin {
    rememberMe: boolean;
    email?: string;
    password?: string;
}

export class UserLogin implements IUserLogin {
    constructor(
        public rememberMe: boolean,
        public email?: string,
        public password?: string
    ) {}
}
