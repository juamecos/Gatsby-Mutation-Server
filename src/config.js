export const {
  APP_PORT = 4000,
  NODE_ENV = "development",
  DB_USERNAME = "juan-chat",
  DB_PASSWORD = "hENAYr6HaEk9X61l",
  DB_NAME = "chat",
} = process.env;

export const IN_PROD = NODE_ENV === "production";
