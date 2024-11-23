const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const authRouter = require("./routes/auth/auth-routes");
const adminProductsRouter = require("./routes/admin/products-route")
const shopProductsRouter = require("./routes/shop/products-route")
const shopCartRouter = require("./routes/shop/cart-route")

require('dotenv').config()

mongoose.connect(process.env.MONGO_DB_URI)
.then(() => { 
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.log("Error connecting to MongoDB:", err);
})

const app = express();
const port = process.env.PORT || 5000;

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        methods : ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders : [
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma",
        ],
        credentials : true 
    })
)

app.use(cookieParser())
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/admin/products", adminProductsRouter);
app.use("/api/shop/products", shopProductsRouter);
app.use("/api/shop/cart", shopCartRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})