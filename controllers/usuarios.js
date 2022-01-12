const { request, response } = require("express");

const usuariosGet = (req = request, res = response) => {
  //res.send("API REST POO");

  const { key, name = "no name", page = 1, limit = 5 } = req.query;
  res.json({
    msg: "get API - controlador",
    key,
    name,
    page,
    limit,
  });
};

const usuariosPost = (req, res) => {
  //res.send("API REST POO");

  //const body = req.body;
  const { nombre, edad } = req.body;

  res.json({
    msg: "post API - controlador",
    nombre,
    edad,
  });
};

const usuariosPut = (req, res) => {
  //res.send("API REST POO");

  const id = req.params.id;
  res.json({
    msg: "put API - controlador",
    id,
  });
};

const usuariosPatch = (req, res) => {
  //res.send("API REST POO");
  res.json({
    msg: "patch API - controlador",
  });
};

const usuariosDelete = (req, res) => {
  //res.send("API REST POO");
  res.json({
    msg: "delete API - controlador",
  });
};

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch,
};
