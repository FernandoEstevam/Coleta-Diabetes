import { Response, Request, NextFunction } from 'express';
import jwt from './Token';
// Interfaces
interface IError {
  status?: number;
  message?: string;
}

class Middleware {
  erro(error: IError, request: Request, response: Response, next: NextFunction) {
    response.status(error.status || 500)
    response.json({ error: error.message })
  }

  pageNotFound(request: Request, response: Response, next: NextFunction) {
    const error:IError = new Error('Page not found');
    error.status = 404;
    
    next(error);
  }

  autheticate(request: Request, response: Response, next: NextFunction) {
    try {
      const autheHeader = request.headers.authorization;

      if(!autheHeader) {
        return response.status(401).json({
          message: 'No token provided'
        });
      }

      const parts = autheHeader.split(' ');

      if(!(parts.length === 2)) {
        return response.status(401).json({
          message: 'Token error'
        });
      }

      const [scheme, token] = parts;

      if(!(/^Bearer$/i).test(scheme)) {
        return response.status(401).json({
          message: 'Token malformatted'
        });
      }

      const decoded = jwt.verifyToken(token);

      response.locals.decoded = decoded;
      
      next();

    } catch (error) {

      throw error;

    }
  }

}

export default new Middleware;