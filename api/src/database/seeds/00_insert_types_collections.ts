import Knex from 'knex';

export async function seed(knex: Knex) {
  // INSERT
  return await knex('types_collections').insert([
      { type: 'Diabetes' },
      { type: 'Pressão' }
  ]);
}
