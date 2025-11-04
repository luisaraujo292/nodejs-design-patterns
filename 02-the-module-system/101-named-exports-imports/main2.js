import {log as log2,Logger} from './logger.js'
const log = console.log
log('message from log')
log2('message from log2')
const logger = new Logger('DEFAULT')
logger.log('Hello world')