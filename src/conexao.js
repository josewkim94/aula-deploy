const knex = require('knex')({
    client: 'pg',
    connection: {
        user: 'postgres',
        host: 'localhost',
        database: 'market_cubos',
        password: 'root',
        port: 5432
    }
});

// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'market_cubos',
//     password: 'root',
//     port: 5432
// });

// const query = (text, param) => {
//     return pool.query(text, param);
// }

module.exports = knex;