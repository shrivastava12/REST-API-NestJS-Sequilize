
module.exports = {
    DEBUG_MODE:process.env.DEBUG_MODE || true,
    LOG_LEVEL: process.env.LOG_LEVEL || 'error',
    PORT : process.env.PORT || 3000,
    DATABASE_URL : process.env.DATABASE_URL || 'mysql://root:1234@localhost:3306/student'
}