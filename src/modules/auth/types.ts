export type loginPayload = {
  email: string;
  password: String;
};

export type AuthResponse = {
  data: {
    detail: {
      id: number;
      name: string;
      email: string;
    };
    token: string;
  };
};
