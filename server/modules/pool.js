const pg = require( 'pg' );

const pool = new pg.Pool({
    host: 'localhost',
    database: 'inventory',
    max: 12,
    idleTimeoutMillis: 30000,
    port: 5432
});

module.exports = pool;