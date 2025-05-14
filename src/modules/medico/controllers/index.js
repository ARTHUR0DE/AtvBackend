import medicoModel from "../models/index.js"

class MedicoController {
    static async cadastrarMedico(id_medico, nome, especialidade, crm) {
        try {
            if (!id_medico || !nome || !especialidade || !crm) {
                return console.error("Todos os campos são obrigatórios.")
            }
            const medico = await medicoModel.cadastrarMedico(id_medico, nome, especialidade, crm)
            return console.table(medico)
        } catch (error) {
            console.error("Erro ao cadastrar médico:", error.message)
        }
    }

    static async listarMedicos() {
        try {
            const medicos = await medicoModel.listarMedicos()
            if (medicos.length === 0) {
                return console.log("Nenhum médico encontrado.")
            }
            console.log("Lista de médicos: ")
            return console.table(medicos)
        } catch (error) {
            console.error("Erro ao listar médicos: ", error.message)
        }
    }

    static async listarPorCrm(crm) {
        try {
            const medico = await medicoModel.listarPorCrm(crm)
            if (medico.length === 0) {
                return console.log("Nenhum médico encontrado com esse CRM.")
            }
            console.log("Médico encontrado: ")
            return console.table(medico)
        } catch (error) {
            console.error("Erro ao listar médico por CRM: ", error.message)
        }
    }

    static async atualizarMedico(id_medico, nome, especialidade, crm) {
        try {
            if (!id_medico || !nome || !especialidade || !crm) {
                return console.error("Todos os campos são obrigatórios.")
            }
            const medico = await medicoModel.AtualizarMedico(id_medico, nome, especialidade, crm)
            return console.table(medico)
        } catch (error) {
            console.error("Erro ao atualizar médico:", error.message)
        }
    }

    static async removerMedico(id_medico) {
        try {
            const resultado = await medicoModel.removerMedico(id_medico)
            if (resultado) {
               return console.log("Médico removido com sucesso.")
            } else {
                console.log("Erro ao remover médico.")
            }
        } catch (error) {
            console.error("Erro ao remover médico:", error.message)
        }
    }
} 

export default MedicoController