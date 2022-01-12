const express = require("express");
const cors = require("cors");

const userRoutes = require("../routes/usuarios");

class Server {
  constructor() {
    this.port = process.env.PORT;
    this.app = express();
    this.usuariosPath = "/api/usuarios";

    /**middlewares */
    this.middlewares();

    /**rutas */
    this.routes();
  }

  middlewares() {
    /**definiendo carpeta publica */
    this.app.use(express.static("public"));

    this.app.use(cors());

    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.usuariosPath, userRoutes);
  }

  runServer() {
    this.app.listen(this.port, () =>
      console.log(`Servidor corriendo en el puerto ${this.port}`)
    );
  }
}

module.exports = Server;
