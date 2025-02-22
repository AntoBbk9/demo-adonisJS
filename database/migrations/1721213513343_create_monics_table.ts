import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'listposts'   

  async up() {
    
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id',{
        primaryKey:true
      })

      table.integer('posts_id').notNullable()
      table.string('slug').notNullable().unique()
      table.foreign('posts_id').references('posts.id').onDelete('CASCADE').onUpdate('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}