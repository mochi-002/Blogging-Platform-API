import Joi from 'joi';
import mongoose from 'mongoose';
import { title } from 'node:process';
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 500,
    },
    content: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    category: {
        type: String,
        trim: true,
        required: true,
    },
    tags: {
        type: [String],
        default: ['uncategorized'],
    },
}, {
    timestamps: true,
});
export const Post = mongoose.model('Post', postSchema);
export function validateCreatingPost(obj) {
    const schema = Joi.object({
        title: Joi.string().trim().min(3).max(500).required(),
        content: Joi.string().trim().min(3).required(),
        category: Joi.string().trim().required(),
        tags: Joi.array().items(Joi.string()).default(['uncategorized']),
    });
    return schema.validate(obj);
}
export function validateUpdatePost(obj) {
    const schema = Joi.object({
        title: Joi.string().trim().min(3).max(500),
        content: Joi.string().trim().min(3),
        category: Joi.string().trim(),
        tags: Joi.array().items(Joi.string()).default(['uncategorized']),
    });
    return schema.validate(obj);
}
//# sourceMappingURL=post.model.js.map