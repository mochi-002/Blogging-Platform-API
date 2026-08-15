import Joi from 'joi';
import mongoose from 'mongoose';
export declare const Post: mongoose.Model<{
    title: string;
    content: string;
    category: string;
    tags: string[];
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    title: string;
    content: string;
    category: string;
    tags: string[];
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    title: string;
    content: string;
    category: string;
    tags: string[];
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    title: string;
    content: string;
    category: string;
    tags: string[];
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    title: string;
    content: string;
    category: string;
    tags: string[];
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    title: string;
    content: string;
    category: string;
    tags: string[];
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    title: string;
    content: string;
    category: string;
    tags: string[];
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    title: string;
    content: string;
    category: string;
    tags: string[];
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare function validateCreatingPost(obj: Object): Joi.ValidationResult<any>;
export declare function validateUpdatePost(obj: Object): Joi.ValidationResult<any>;
//# sourceMappingURL=post.model.d.ts.map