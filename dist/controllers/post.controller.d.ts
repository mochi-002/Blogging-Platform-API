import express from 'express';
/**
 * @desc Create New Post
 * @route /posts
 * @method POST
 * @access public
 */
export declare const createPost: express.RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
/**
 * @desc Update Blog Post
 * @route /posts/:id
 * @method PUT
 * @access public
 */
export declare const updatePost: express.RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
/**
 * @desc Delete Blog Post
 * @route /posts/:id
 * @method DELETE
 * @access public
 */
export declare const deletePost: express.RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
/**
 * @desc Get Blog Post
 * @route /posts/:id
 * @method GET
 * @access public
 */
export declare const getPost: express.RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
/**
 * @desc Get Blog Posts
 * @route /posts
 * @method GET
 * @access public
 */
export declare const getPosts: express.RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
//# sourceMappingURL=post.controller.d.ts.map