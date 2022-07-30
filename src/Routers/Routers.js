const { Router } = require("express");
const router = Router();
const apiRoute = '/api';
const pacientesControllers = require("../Controllers/pacientesControllers")

router.get(apiRoute + '/pacientes',pacientesControllers.getAll);
router.post(apiRoute + '/pacientes',pacientesControllers.create);

module.exports = router;