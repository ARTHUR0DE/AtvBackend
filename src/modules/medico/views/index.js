import MedicoController from "../controllers/index.js"
import PromptSync from "prompt-sync"
const input = PromptSync()

class MedicoView {
    static async cadastrarMedico() {
        const id_medico = input("Digite o ID do médico: ")
        const nome = input("Digite o nome do médico: ")
        const especialidade = input("Digite a especialidade do médico: ")
        const crm = input("Digite o CRM do médico: ")
        const medico = await MedicoController.cadastrarMedico(id_medico, nome, especialidade, crm)
        console.table(medico)
    }

    static async listarMedicos() {
        const medicos = await MedicoController.listarMedicos()
        console.table(medicos)
    }

    static async listarPorCrm() {
        const crm = input("Digite o CRM do médico: ")
        const medico = await MedicoController.listarPorCrm(crm)
        console.table(medico)
    }

    static async atualizarMedico() {
        const id_medico = input("Digite o ID do médico: ")
        const nome = input("Digite o novo nome do médico: ")
        const especialidade = input("Digite a nova especialidade do médico: ")
        const crm = input("Digite o novo CRM do médico: ")
        const medico = await MedicoController.atualizarMedico(id_medico, nome, especialidade, crm)
        console.table(medico)
    }

    static async removerMedico() {
        const id_medico = input("Digite o ID do médico: ")
        const resultado = await MedicoController.removerMedico(id_medico)
        if (resultado) {
            console.log("Médico removido com sucesso.")
        } else {
            console.log("Erro ao remover médico.")
        }
    }
}

export default MedicoView