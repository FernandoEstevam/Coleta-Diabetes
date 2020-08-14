import { Response, Request, NextFunction } from 'express';

// Interfaces
interface IError {
  status?: number;
  message?: string;
}

class Middleware {
  erro(error: IError, request: Request, response: Response, next: NextFunction) {
    console.log(error);

    response.status(error.status || 500).json({
      erro: true,
      error: error
    });
  }

  pageNotFound(request: Request, response: Response, next: NextFunction) {
    const error: IError = {
      status: 400,
      message: 'Page not found'
    }

    new Error(error);
    // erro.status = 404;
    next(error);
  }
}

export default new Middleware;