import Knex from 'knex';

export async function up(knex: Knex) {
  // CREATE TABLE
  return knex.schema.createTable('types_collections', table => {
    table.increments('id').primary();
    table.string('type', 20).notNullable().unique();
    table.timestamps(true,true);
  })
}

export async function down(knex: Knex) {
  // DROP TABLE
  return knex.schema.dropTable('types_collections');
}