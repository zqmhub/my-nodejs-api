import log4js from 'log4js';
log4js.configure({
    appenders: {
        console: { type: 'console' },
        file: { type: 'file', filename: 'log.log' }
    },
    categories: {
        default: { appenders: ['console', 'file'], level: 'info' }
    }
})

const logger = log4js.getLogger('default');

const loggerMiddleware = (req,res,next)=>{
    logger.info(`${req.method} ${req.url}`); // 记录请求方法和URL
    next();
}
export default loggerMiddleware;


