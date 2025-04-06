// remark-usage-ignore-next
/* eslint-disable-next-line no-unused-vars */
import {getPrompt, logger} from './lib/index.js';

getPrompt({});

logger.info('info message');
logger.success('success message');
logger.warn('warn message');
logger.error('error message');
