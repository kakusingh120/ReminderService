const express = require("express");
const router = express.Router();

// V1 Api setup
const v1ApiSetUp = require();


// Routes. => /api/v1/
router.use("/v1", v1ApiSetUp);


module.exports = router;

