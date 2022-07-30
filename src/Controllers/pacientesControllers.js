const pacientesControllers = {};
const e = require("express");

pacientesControllers.getAll = (req, res) => {

}

pacientesControllers.create = (req, res) => {

    let peso_actual = [];
    let perdieron_peso = 0;
    let cumplieron_objetivo = 0;
    let response = {};

    const pacientes = req.body;

    for (let i = 0; i < pacientes["pacientes"].length; i++) {
        const pacientesdatos = pacientes["pacientes"][i];

        //Punto A) Pacientes que perdieron o ganaron peso

        //Punto C) Cantidad de pacientes que alcazaron su objetivo
         
        let pacientesganaron = {};
        
        if ( pacientesdatos.peso_final > pacientesdatos.peso_inicial ) {

            let pesofinal = pacientesdatos.peso_final - pacientesdatos.peso_inicial;
            
            pacientesganaron.nombre = pacientesdatos.nombre;
            pacientesganaron.pesoActual = pacientesdatos.peso_final;
            pacientesganaron.estado = `gano ${pesofinal} kilos`;

            let estado = "subir";

            estado === pacientesdatos.objetivo ? pacientesganaron.objetivo = "Cumplido" : pacientesganaron.objetivo = "No cumplido";

            pacientesganaron.objetivo === "Cumplido" ? cumplieron_objetivo++ : 0;
            
            peso_actual.push(pacientesganaron) 
            
        }

        let pacientesperdieron = {};

        
        if (pacientesdatos.peso_final < pacientesdatos.peso_inicial) {

            let pesofinal = pacientesdatos.peso_inicial - pacientesdatos.peso_final;
            
            pacientesperdieron.nombre = pacientesdatos.nombre;
            pacientesperdieron.pesoActual = pacientesdatos.peso_final;
            pacientesperdieron.estado = `perdio ${pesofinal} kilos`;

            let estado = "bajar";

            estado === pacientesdatos.objetivo ? pacientesperdieron.objetivo = "Cumplido" : pacientesperdieron.objetivo = "No cumplido";

            pacientesperdieron.objetivo === "Cumplido" ? cumplieron_objetivo++ : 0;

            peso_actual.push(pacientesperdieron);
        }

        //Punto B) Pacientes que perdieorn peso entre la pesada inicial y la intermedia

        pacientesdatos.peso_intermedio < pacientesdatos.peso_inicial ? perdieron_peso++ : 0;

    }
    response["Peso Actual y Objetivos"] = peso_actual;
    response["Perdieron Peso Inicio - Intermedio"] = perdieron_peso;
    response["Cantidad de Usuarios que Cumplieron Objetivo"] = cumplieron_objetivo;

    res.json(response);

}

module.exports = pacientesControllers;