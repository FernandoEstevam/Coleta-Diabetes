import Knex from 'knex';

export async function up(knex: Knex) {
  // CREATE TABLE
  return knex.schema.createTable('collections', table => {
    table.increments('id').primary();
    table.date('date').notNullable();
    table.time('time').notNullable();
    table.string('collect').notNullable();
    table.integer('user_id').notNullable();
    table.foreign('user_id')
      .references('users.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    table.integer('type_collect_id').notNullable();
    table.foreign('type_collect_id')
      .references('types_collections.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

    table.timestamps(true,true);
  })
}

export async function down(knex: Knex) {
  // DROP TABLE
  return knex.schema.dropTable('collections');
}