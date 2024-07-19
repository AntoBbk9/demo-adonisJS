import type { HttpContext } from '@adonisjs/core/http'
import Post from '#models/post'

export default class ListpostsController {
    async listpost(ctx: HttpContext) {
    const slugs =  await Post.query().select('slug');



        return ctx.view.render('pages/posts/listOfPosts', { title: 'Listposts', slugs })
    }
}