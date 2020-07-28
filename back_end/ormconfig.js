module.exports = {
    "type": process.env.DATABASE_TYPE,
    "host": process.env.DATABASE_HOST,
    "post": process.env.DATABASE_PORT,
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "synchronize": true,
    "dropSchema": false,
    "logging": true,
    "entities": [
        "./dist/**/*.entity{.ts,.js}"
    ]
}