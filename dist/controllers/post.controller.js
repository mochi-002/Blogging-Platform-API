import express from 'express';
import asyncHandler from 'express-async-handler';
import { Post, validateCreatingPost, validateUpdatePost, } from '../models/post.model.js';
import mongoose, { mongo } from 'mongoose';
import { validateId } from '../middleware/errors.middlewares.js';
/**
 * @desc Create New Post
 * @route /posts
 * @method POST
 * @access public
 */
export const createPost = asyncHandler(async (req, res) => {
    const { error } = validateCreatingPost(req.body);
    if (error) {
        res.status(400).json({
            message: error.details[0]?.message,
        });
        return;
    }
    const post = await Post.create(req.body);
    res.status(201).json(post);
});
/**
 * @desc Update Blog Post
 * @route /posts/:id
 * @method PUT
 * @access public
 */
export const updatePost = asyncHandler(async (req, res) => {
    const { error } = validateUpdatePost(req.body);
    if (error) {
        res.status(400).json({
            message: error.details[0]?.message,
        });
        return;
    }
    if (!validateId(String(req.params.id), res)) {
        return;
    }
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    if (!updatedPost) {
        res.status(404).json({
            message: 'Post not found',
        });
        return;
    }
    res.status(200).json(updatedPost);
});
/**
 * @desc Delete Blog Post
 * @route /posts/:id
 * @method DELETE
 * @access public
 */
export const deletePost = asyncHandler(async (req, res) => {
    if (!validateId(String(req.params.id), res)) {
        return;
    }
    const deleted = await Post.findByIdAndDelete(req.params.id);
    if (!deleted) {
        res.status(404).json({
            message: `Blog Post not Found`,
        });
    }
    res.status(200).json({
        message: `Blog Post has been deleted`,
    });
});
/**
 * @desc Get Blog Post
 * @route /posts/:id
 * @method GET
 * @access public
 */
export const getPost = asyncHandler(async (req, res) => {
    if (!validateId(String(req.params.id), res)) {
        return;
    }
    const post = await Post.findById(req.params.id);
    if (!post) {
        res.status(404).json({
            message: `Blog Post not found`,
        });
    }
    res.status(200).json(post);
});
/**
 * @desc Get Blog Posts
 * @route /posts
 * @method GET
 * @access public
 */
export const getPosts = asyncHandler(async (req, res) => {
    const term = typeof req.query.term === 'string' ? req.query.term : undefined;
    const filter = term
        ? {
            $or: [
                { title: { $regex: term, $options: 'i' } },
                { content: { $regex: term, $options: 'i' } },
                { category: { $regex: term, $options: 'i' } },
            ],
        }
        : {};
    const posts = await Post.find(filter);
    if (!posts) {
        res.status(404).json({
            message: `NO Blog Posts Found`,
        });
    }
    res.status(200).json(posts);
});
//# sourceMappingURL=post.controller.js.map