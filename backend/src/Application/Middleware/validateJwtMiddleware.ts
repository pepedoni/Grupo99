import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export default function validateJwtMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
  usersTypeForbidden: Array<string>
) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token de autenticação não fornecido' });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY as string, { algorithms: ['HS256'] });
    res.locals.user = decodedToken;

    if (usersTypeForbidden.includes(res.locals.user.type)) {
      return res.status(401).json({ message: 'Tipo de usuário não autorizado!' });
    }

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token inválido' });
  }
}
