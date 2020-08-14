import db from '../database/connections';

// Interfaces
interface IUsers {
  id?: number
  login: string;
  password: string;
}

class UserModel {
  select(id?: number) {
    try {
      const query = db('users')
        .select('*')
        .orderBy('id')
    
      if(id) {
        return query.where({id});
      }
        
      return query;
        
    } catch (error) {
      throw error;
    }

  }
  
  
  insert(data: IUsers) {

    const query = db('users').insert(data);
    
    return query;
  }


}

export default new UserModel;