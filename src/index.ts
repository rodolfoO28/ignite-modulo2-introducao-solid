import express from "express";
import swaggerUI from "swagger-ui-express";

import { usersRoutes } from "./routes/users.routes";
import swaggerJSON from "./swagger.json";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJSON));
app.use("/users", usersRoutes);

export { app };
