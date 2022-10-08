const config =  require('config');

module.exports = {
    development:{
        url:config.DATABASE_URL,
        dialect:'mysql',
        dialectOptions:{
            multipleStatements:true
        }
    }
}