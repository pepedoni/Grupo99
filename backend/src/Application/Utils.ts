import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createJWT = (userId: number, type: string): string => {
  return jwt.sign({ userId, type }, process.env.JWT_SECRET_KEY as string, { algorithm: 'HS256' });
}

export const encryptPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, Number(process.env.ENCRYPT_SALT || 10));
}

export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  return bcrypt.compare(password, hashedPassword);
}