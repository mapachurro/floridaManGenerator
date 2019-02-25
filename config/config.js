module.exports = {
  development: {
    username: "root",
    password: "Man0Negra",
    database: process.env.MYSQL_PASSWORD,
    host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
};
