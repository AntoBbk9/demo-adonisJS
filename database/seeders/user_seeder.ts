import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'
export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await User.create({
      email: 'cmwanya@example.com',
      fullName: 'Emile zola',
      password: '123456789',
    })
  }
}
