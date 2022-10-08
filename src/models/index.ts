import {Sequelize,SequelizeOptions} from 'sequelize-typescript';
import * as config from 'config';
import {PoolOptions} from 'sequelize';
import { logger } from 'src/common';
import { Student } from './Student';



// Logging query in development mode
const options:SequelizeOptions =  {
    define:{
        timestamps:false
    },
    dialectOptions:{
        multipleStatements:true
    },
};


if(process.env.NODE_ENV === 'production' && !config.has('DEBUG_MODE')){
    options.logging = false;
}else{
    options.logQueryParameters = true;
    options.logging =  (sql) => logger.debug(sql);
}

if(config.has('POOL_OPTIONS')){
    options.pool =  config.get<PoolOptions>('POOL_OPTIONS');
}

// Create the instance of sequilize
const sequelize =  new Sequelize(config.get<string>('DATABASE_URL'),options);

// ISSUE 10557

// sequelize.addHook('beforeCount',function(options)){
//     if(this._scope.include &&)
// }

sequelize.addModels([
    Student,
]);

export {sequelize}
export {Student};