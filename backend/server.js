const express =
  require("express");

const mongoose =
  require("mongoose");

const cors =
  require("cors");

require("dotenv").config();

const authRoutes =
  require("./routes/authRoutes");

const transactionRoutes =
  require("./routes/transactionRoutes");

const budgetRoutes =
  require("./routes/budgetRoutes");

const dashboardRoutes =
  require("./routes/dashboardRoutes");

const app = express();



// MIDDLEWARE
app.use(cors());

app.use(express.json());



// ROUTES
app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/transactions",
  transactionRoutes
);

app.use(
  "/api/budget",
  budgetRoutes
);

app.use(
  "/api/dashboard",
  dashboardRoutes
);



// DATABASE CONNECTION
mongoose.connect(
  process.env.MONGO_URI
)

.then(() => {

  console.log(
    "MongoDB Connected"
  );

})

.catch((error) => {

  console.log(error);

});



// SERVER
const PORT = 5000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});