export interface IUser {
  name: string;
  realm?: any;
  username?: any;
  credentials?: any;
  challenges?: any;
  email: string;
  emailVerified: boolean;
  status?: any;
  created?: any;
  lastUpdated?: any;
  id: number;
  condominiumId: number;
}

export class User implements IUser {
  name: string;
  realm?: any;
  username?: any;
  credentials?: any;
  challenges?: any;
  email: string;
  emailVerified: boolean;
  status?: any;
  created?: any;
  lastUpdated?: any;
  id: number;
  condominiumId: number;
}
