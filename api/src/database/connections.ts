import knex from 'knex';
import path from 'path';

const db = knex({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'db_coletas'
  },
  useNullAsDefault: true,
});


export default db;