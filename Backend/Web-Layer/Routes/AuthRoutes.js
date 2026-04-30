const express = require("express");

const router = express.Router();

const {login,register,logout} = require("../Controller/AuthController");
const authMiddleware = require("../Middleware/AuthMiddleware");

router.post("/auth/register", register);
router.post("/auth/login", login);

router.use(authMiddleware);
router.post("/auth/logout", logout);

module.exports = router;