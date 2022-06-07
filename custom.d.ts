import { db } from "./db";

declare module "express-serve-static-core" {
  export interface Request {
    db?: typeof db;
  }
}
