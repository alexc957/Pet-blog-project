export interface IUser {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  posts?: IPost[];
}

export interface IPost {
  id: number;
  title: string;
  content?: string;
  published: boolean;
  author?: IUser;
  authorId?: number;
}
