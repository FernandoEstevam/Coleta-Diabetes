import Knex from 'knex';

export async function up(knex: Knex) {
  // CREATE TABLE
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('login', 20).notNullable().unique();
    table.string('password', 255).notNullable();
    table.timestamps(true,true);
  })
}

export async function down(knex: Knex) {
  // DROP TABLE
  return knex.schema.dropTable('users');
}