import express from 'express';
export declare const notFound: (req: express.Request, res: express.Response, next: express.NextFunction) => void;
export declare const errorHandler: (err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => void;
export declare const validateId: (id: string, res: express.Response) => boolean;
//# sourceMappingURL=errors.middlewares.d.ts.map