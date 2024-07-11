const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();


//Middlewares
app.use(express.json());
app.use(cors());
app.use("/books",router);

mongoose
  .connect(
   "mongodb+srv://new-user:WvgY8lRZI5ghiPMh@cluster0.td2nxrm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)
  .then(()=>console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
 





// WvgY8lRZI5ghiPMh