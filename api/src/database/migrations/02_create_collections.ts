import Knex from 'knex';

export async function up(knex: Knex) {
  // CREATE TABLE
  return knex.schema.createTable('collections', table => {
    table.increments('id').primary();
    table.date('date').notNullable();
    table.time('time').notNullable();
    table.string('collect').notNullable();

    table.integer('user_id').notNullable().unsigned();
    table.foreign('user_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    table.integer('type_collections_id').notNullable().unsigned();
    table.foreign('type_collections_id')
      .references('id')
      .inTable('types_collections')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    
    table.timestamps(true,true);
  })
}

export async function down(knex: Knex) {
  // DROP TABLE
  return knex.schema.dropTable('collections');
}