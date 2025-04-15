const express = require("express");



const router = express.Router();

const {getLogoutView, killApplication,
} = require("../controllers/logoutController");

router.post("/kill", killApplication);
router.get("/", getLogoutView);


module.exports = router;