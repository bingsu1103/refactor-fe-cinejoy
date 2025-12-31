export {};

declare global {
  interface IBackendRes<T> {
    statusCode: number | string;
    error: string;
    message: object;
    data: T;
  }

  interface IFetchUserRes {
    id: number;
    username: string;
    email: string;
    avatar?: string;
  }

  interface ILoginRes {
    accessToken: string;
    refreshToken: string;
    user: IFetchUserRes;
  }

  interface IRegisterRes {
    id: number;
    username: string;
    email: string;
    phone: string;
    role: string;
    createdAt: string;
    updatedAt: string;
  }
  interface ReqFilm {
    name: string;
    duration: number;
    price: number;
    description: string;
    genre: string;
    language: string;
    release_date: string | Date;
    rating: number;
  }
}
