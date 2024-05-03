const express = require("express");
const db = require("./config/database.js");
const userRoutes = require("./routes/userRoutes.js");
const userRoutesDet = require("./routes/userRoutDet.js");
const userRouteFiles = require("./routes/userRouteFiles.js");
const bodyParser = require("body-parser");
const productsRoute = require("./routes/productsRoutre.js");
const categoriesRoutes = require("./routes/categoriesRoutes.js");
const subcategoriesRoutes = require("./routes/subcategoriesRoutes.js");
const packagingRoutes = require("./routes/packagingRoutes.js");
const certificatesRoutes = require("./routes/certificatesRoutes.js");
const fileRoute = require("./routes/fileRoute.js");
const cardRouter = require("./routes/cardRouter.js");
const fileUpload = require("express-fileupload");

const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
app.use("/api/v1/vendor/profile", userRoutes);
app.use("/api/v1/vendor/product/file", fileRoute);
app.use("/api/v1/vendor/product/add", productsRoute);
app.use("/api/v1/vendor/product/category", categoriesRoutes);
app.use("/api/v1/vendor/product/subcategory", subcategoriesRoutes);
app.use("/api/v1/vendor/product/packaging", packagingRoutes);
app.use("/api/v1/vendor/product/certificates", certificatesRoutes);

app.use("/api/v1/vendor/file", userRouteFiles);
app.use("/api/v1/vendor/det", userRoutesDet);
app.use("/api/v1/vendor/card", cardRouter);

app.listen(4000, () => console.log("Server running at port 4000"));
