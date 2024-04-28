const {express , json} = require("express");
const {cors} = require("cors");
const {mainrouter} = require("./routes/index");

const app = express();

app.use("/api/v1",mainrouter);
app.use(cors());
app.use(json());

// /api/v1/user/signup
// /api/v1/user/signin
// /api/v1/user/update
// /api/v1/user/delete

// /api/v1/account/balance 
// /api/v1/account/transfer money


app.listen(3000);
