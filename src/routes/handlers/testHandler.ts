import express from "express";

export default (req: express.Request, res: express.Response) => {
  return res.send("Testing the flow");
};
