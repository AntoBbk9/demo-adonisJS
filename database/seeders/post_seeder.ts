import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Post from '#models/post'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Post.create({
      title: 'Devenir developpeur',
      description: 'Un developpeur est une personne claire',
      authorId: 1,
      imageUrl:
        'https://res.cloudinary.com/dzcuoxidd/image/upload/v1718362845/rwc9btgxed1wiycoq1yp.jpg',
      slug: 'developpeur-slug',
    })
  }
}
