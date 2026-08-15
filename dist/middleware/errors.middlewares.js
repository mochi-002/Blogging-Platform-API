import express from 'express';
import mongoose from 'mongoose';
export const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};
export const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode).json({ message: err.message });
};
export const validateId = (id, res) => {
    if (!mongoose.isValidObjectId(id)) {
        res.status(400).json({
            message: 'Invalid post ID',
        });
        return false;
    }
    return true;
};
//# sourceMappingURL=errors.middlewares.js.map