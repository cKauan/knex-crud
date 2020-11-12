import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
    return await knex.schema.createTable('users', (table) => {
        table.increments('id').unique();
        table.text('name').notNullable();
        table.text('surname').notNullable();
        table.text('email').notNullable();
        table.text('cpf').notNullable();
        table.date('birthday').notNullable();
        table.text('phone').notNullable();
        table.boolean('active').notNullable();
    });
}

export async function down(knex: Knex): Promise<void> {
    return await knex.schema.dropTable('users');
}
