import type { Request, Response, NextFunction } from 'express';
export declare const logger: {
    info(message: string): void;
    success(message: string): void;
    warn(message: string): void;
    error(message: string): void;
    request(message: string): void;
    separator(): void;
};
export declare function requestsLogger(req: Request, res: Response, next: NextFunction): void;
export declare function serverLogger(PORT: number): void;
//# sourceMappingURL=logger.middleware.d.ts.map