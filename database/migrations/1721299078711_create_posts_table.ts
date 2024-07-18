import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'posts'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id',{
        primaryKey:true
      })

      table.string('title').notNullable()
      table.string('description')
      table.integer('author_id').notNullable()
      table.string('image_url')
      table.string('slug').notNullable().unique()
      table.foreign('author_id').references('users.id').onDelete('CASCADE').onUpdate('CASCADE')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}