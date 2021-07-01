import express from "express";
import morgan from "morgan";
import routes from "./routes/index";
import productsRoutes from "./routes/productRoute";
import mongoose from "mongoose";
import cors from "cors";

class Server {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config() {
    //connection mongodb atlas
    const mongodb_atlas =
      "mongodb+srv://<user>:<password>@cluster0.fvcxm.mongodb.net/api-db?retryWrites=true&w=majority";
    mongoose.set("useFindAndModify", true);
    mongoose
      .connect(mongodb_atlas || process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
      })
      .then((db) => console.log("Connected to database"))
      .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
      });
    //Settings
    this.app.set("port", process.env.PORT || 3000);
    //Middlewares
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(morgan("dev"));
    this.app.use(cors());
  }

  routes() {
    this.app.use(routes);
    this.app.use("/api/products", productsRoutes);
  }

  start() {
    this.app.listen(this.app.get("port"), () => {
      console.log("Server on port:", this.app.get("port"));
    });
  }
}

const server = new Server();
server.start();
