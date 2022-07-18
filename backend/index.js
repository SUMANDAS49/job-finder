import express from "express";
import { mongoDbConnection } from "./Connection.js";
import AuthRoutes from "./routes/Auth.js";
const app = express();
app.use(express.json());

//connection to mongodb server
mongoDbConnection();

//just to test weather it is working properly
app.get("/", (req, res) => {
  return res.status(200).json({ message: "hello world" });
});

//all routings are done here
app.use("/auth", AuthRoutes);

app.listen(8000, () => {
  console.log("listening on http://localhost:8000");
});
