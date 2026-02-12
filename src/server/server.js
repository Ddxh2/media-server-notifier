import express from "express";
import { ready } from "../api/ready.js";
import { downloadComplete } from "../api/downloadComplete.js";
import { pipe } from "../api/pipe.js";

const endpoints = [downloadComplete, pipe, ready];

export const setUpExpressServer = () => {
  const app = express();
  app.use(express.json());
  endpoints.reduce((acc, curr) => curr(acc), app);
};
