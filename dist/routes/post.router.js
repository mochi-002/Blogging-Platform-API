import express from 'express';
import { createPost, deletePost, getPosts, getPost, updatePost, } from '../controllers/post.controller.js';
const router = express.Router();
router.route('/').post(createPost).get(getPosts);
router.route('/:id').put(updatePost).delete(deletePost).get(getPost);
export { router as postsRouter };
//# sourceMappingURL=post.router.js.map