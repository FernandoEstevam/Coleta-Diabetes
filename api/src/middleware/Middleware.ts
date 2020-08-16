import { Response, Request, NextFunction } from 'express';

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
}

export default new Middleware;