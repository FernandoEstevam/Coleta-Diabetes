import jwt from 'jsonwebtoken';
import authConfig from '../config/auth';

class Token {

  generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
      expiresIn: '1h',
    });
  }

  verifyToken(token: string) {
    return jwt.verify(token, authConfig.secret);
  }
}

export default new Token;