const express = require('express');
const router = express.Router();
const fs = require("fs");



router.get("/", (req, res) => {
  res.send("Hello World! desde express con routes");
});


/* CONSULTAS */
router.get('/users', (req, res) => {
    const user = JSON.parse(fs.readFileSync("./users.json", "utf8"));
    res.json(user)
})

/* CREAR USUARIOS */

router.post('/users', (req, res) => {
const user = req.body
    const users = JSON.parse(fs.readFileSync("./users.json", "utf8"));
    users.push(user);
    fs.writeFileSync("./users.json", JSON.stringify(users));
    res.send("Usuario creado correctamente");

})

router.get("/nosotros", (req, res) => {
  res.send("Nosotros");
});

router.get("/contacto", (req, res) => {
  res.send("Contacto");
});

router.post("/register", (req, res) => {
  res.send("Register a new user");
});

router.put("/update", (req, res) => {
  res.send("Update user");
});

router.delete("/delete", (req, res) => {
  res.send("Delete user");
});

module.exports = router;