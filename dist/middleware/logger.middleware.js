import chalk from 'chalk';
export const logger = {
    info(message) {
        console.log(`${chalk.blue('INFO')} ${message}`);
    },
    success(message) {
        console.log(`${chalk.green('SUCCESS')} ${message}`);
    },
    warn(message) {
        console.log(`${chalk.yellow('WARN')} ${message}`);
    },
    error(message) {
        console.log(`${chalk.red('ERROR')} ${message}`);
    },
    request(message) {
        console.log(`${chalk.bgCyan.black(' REQ ')} ${message}`);
    },
    separator() {
        console.log(chalk.gray('─'.repeat(50)));
    },
};
export function requestsLogger(req, res, next) {
    logger.separator();
    logger.request(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}
export function serverLogger(PORT) {
    logger.separator();
    logger.separator();
    logger.info('Server is running');
    logger.info(`Port: ${PORT}`);
    logger.info(`URL: http://localhost:${PORT}`);
    logger.separator();
}
//# sourceMappingURL=logger.middleware.js.map