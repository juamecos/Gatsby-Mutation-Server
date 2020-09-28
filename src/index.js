import { ApolloServer } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import cors from "cors";
require("dotenv").config({
  path: `.env`,
});

const { APP_PORT, IN_PROD, DB_NAME, DB_PASSWORD, DB_USERNAME } = process.env;

mongoose.connect(
  `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.4zi1w.mongodb.net/${DB_NAME}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  },
  (err, _) => {
    if (err) {
      console.log("Error de conexión");
    } else {
      console.log("Database connected");
      server();
    }
  }
);

const server = () => {
  const app = express();

  app.disable("x-powered-by");

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: !IN_PROD,
  });

  // This allows that client makes a successfull request or mutation

  app.use(cors({ credentials: true, origin: "http://localhost:8000" }));

  server.applyMiddleware({ app, path: "/graphql", cors: false });

  app.listen({ port: 4000 }, () =>
    console.log(
      `Server ready at http://localhost:${APP_PORT}${server.graphqlPath}`
    )
  );
};
