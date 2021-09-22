export interface Post {
  _id?: string;
  title?: string;
  description?: string;
  language?: string;
  code?: string;
  userId?: string;
}

export interface login {
  email?: string;
  password?: string;
}

export interface SignUp {
  fname?: string;
  lname?: string;
  email?: string;
  password?: string;
}
