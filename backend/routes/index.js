const { Router } = require("express");
const userrouter = require("./user");
const accountrouter = require("./account");

const router = Router();

app.use("/user",userrouter);
app.use("/account",accountrouter);


module.exports = router;