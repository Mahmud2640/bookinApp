import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello From auth server");
});


export default router;