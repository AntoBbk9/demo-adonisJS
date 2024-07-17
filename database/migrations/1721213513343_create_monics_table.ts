import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'monics'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id', {
        primaryKey:true
      })
  
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}