import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello From auth endpoint");
});
router.get("/register", (req, res) => {
  res.send("Hello From auth Register endpoint");
});

export default router;
