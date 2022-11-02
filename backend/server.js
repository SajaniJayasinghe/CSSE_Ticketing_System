const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { connection } = require("../backend/utils/connection");
const dotenv = require("dotenv");

//@import router
const UserRouter = require("./routes/user.routes");
const BusRouter = require("./routes/bus.routes");
const BusRouteRouter = require("./routes/bus.busRoute.routes");

const app = express();

require("dotenv").config();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;

app.use("/api/user", UserRouter);
app.use("/api/bus", BusRouter);
app.use("/api/busRoute", BusRouteRouter);

const busPDFRoutes = require("./routes/PDF-generator/bus-report");
app.use(busPDFRoutes);

app.listen(PORT, () => {
  console.log(`Server is up and running on port number: ${PORT}`);
  connection();
});
