module.exports = {
    LOG_LEVEL: process.env.LOG_LEVEL || 'error',
    POOL_OPTIONS:{
        min:0,
        max:2,
        idle:0,
        acquire:3000,
        evict:30000
    }
}