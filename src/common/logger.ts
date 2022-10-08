
process.env.NO_COLOR = 'true';

import * as config from 'config';
import {Logger} from '@nestjs/common';

const logger = new Logger();

if(config.get<string>('LOG_LEVEL') === 'error'){
    logger.localInstance.setLogLevels(['error']);
}

export {logger};