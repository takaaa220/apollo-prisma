import { ApolloServer } from "apollo-server";

import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {}
});

server
  .listen({
    port: 8393
  })
  .then(info => console.log(`Server started on http://localhost:${info.port}`));
