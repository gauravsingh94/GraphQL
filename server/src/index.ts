import express, { Request, Response, NextFunction } from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import * as path from "path";
const fs = require("fs");
import { routes } from "./resolver/resolver";

const schemaString = fs.readFileSync(
  path.join(__dirname, "./schema.gql"),
  "utf8"
);

const schema = buildSchema(schemaString);

interface CustomRequest extends Request {
  authHeader?: string;
}

const authMiddleware = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  req.authHeader = req.headers.authorization;
  next();
};

const root = { ...routes };

const app = express();

app.get("/healthcheck", (req: Request, res: Response) => {
  res.json({ msg: "hi" });
});
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

const port = 4000;

app.listen(port, () => {
  console.log(`Running GraphQL api at http://localhost:${port}/graphql`);
});
