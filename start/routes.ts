/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const PostsController = ()=> import ('#controllers/posts_controller')
const ListpostsController = ()=> import ('#controllers/listposts_controller')

router.on('/').render('pages/home').as('home')
router.get('/posts', [PostsController, 'index'])
router.get('/listposts',[ListpostsController, 'listpost'] )
