import express, { Response, Request } from "express";
import mongoose from "mongoose";
import cors from "cors";
import menuRoutes from "./routes";

const app = express();

const PORT: string | number = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(menuRoutes);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to Menu restaurant API" });
});

const uri: string = `mongodb://127.0.0.1:27017/menuDb`;
mongoose
  .connect(uri)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT} and db connected`)
    )
  )
  .catch((error) => {
    throw error;
  });
