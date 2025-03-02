const config = {
    development: {
        database: {
            host: 'localhost',
            port: 5432,
            name: 'kingdom_eccommerce_dev',
            username: 'dev_user',
            password: 'dev_password'
        },
        server: {
            port: 3000
        }
    },
    production: {
        database: {
            host: 'prod-db-host',
            port: 5432,
            name: 'kingdom_eccommerce',
            username: 'prod_user',
            password: 'prod_password'
        },
        server: {
            port: process.env.PORT || 3000
        }
    }
};

module.exports = config;