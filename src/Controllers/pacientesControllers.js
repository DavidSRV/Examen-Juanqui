const pacientesControllers = {};
const e = require("express");

pacientesControllers.getAll = (req,res) => {

};

pacientesControllers.create = (req,res) => {
    
        let peso_actual = [];
        const perdieron_peso = 0;
        const ganaron_peso = 0;
        const pesoi_pesointermedio = 0;
        const pacientes_objetivo = 0;
        const objetivos = [];
    
        const pacientes = req.body;
    
    for (let i = 0; i < pacientes["pacientes"].length; i++) {
       
        let pacientesdatos = pacientes["pacientes"][i];

        let pesofinal = pacientesdatos.peso_inicial - pacientesdatos.peso_final;

        let pacientesobjeto = {};

        if(pesofinal >= 0){

            pacientesobjeto.nombre = pacientesdatos.nombre;
            pacientesobjeto.peso = pesofinal
            pacientesobjeto.estado = "gano"
            ganaron_peso++;
            
            peso_actual.push(pacientesobjeto);

        }else if(pesofinal <= 0){

            pacientesobjeto.nombre = pacientesdatos.nombre;
            pacientesobjeto.peso= pesofinal
            pacientesobjeto.estado = "perdio"
            perdieron_peso++;

            peso_actual.push(pacientesobjeto);

        }

        
    }

    res.json(peso_actual);

    
};

module.exports = pacientesControllers;