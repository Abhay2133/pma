import JWT from "jsonwebtoken";

export interface UserPayload {
  id: string;
  username: string;
  email: string;
}

const secret: string = process.env.JSON_WEB_SECRET!;

function generateToken(payload: UserPayload): string {
  const token: string = JWT.sign(payload, secret);
  return token;
}

function decodeToken(token: string) {
  const user = JWT.verify(token, secret) as UserPayload;
  return user;
}

export { generateToken, decodeToken };
