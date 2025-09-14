const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ApiRoutes = require("./routes/index");
const { PORT } = require("./config/server.config");

const port = PORT || 3000;


const setupAndStartServer = async () => {
    try {

        // middleware setup
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));


        // route setup
        app.get('/', (req, res) => {
            res.send("hello");
        })

        // global Api setup
        app.use("/api", ApiRoutes);


        app.listen(port, () => {
            console.log(`Server is listening on port http://localhost:${port}`);
        })




    } catch (error) {
        console.log("Error during server starting");
        throw error;
    }
}

setupAndStartServer()