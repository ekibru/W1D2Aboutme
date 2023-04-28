const express = require("express");
const productRouter = require("./routes/productRouter");
const cors = require("cors");

const app = express();
app.use(express.json()); //req.body = {...}

app.use(cors());

app.use("/products", productRouter);

app.listen(4000, () => console.log("listen on 4000"));
