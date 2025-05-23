import PacienteController from "../controllers/index.js"
import PromptSync from "prompt-sync"
const input = PromptSync()

class PacienteView {
    static async cadastrarPaciente() {
        const nome = input("Digite o ID do paciente: ")
        const id_paciente = input("Digite o Nome do paciente: ")
        const cpf = input("Digite a CPF do paciente: ")
        const telefone = input("Digite o Telefone do paciente: ")
        const paciente = await PacienteController.cadastrarPaciente(nome, id_paciente, cpf, telefone)
        console.table(paciente)
    }

    static async listarPacientes() {
        const pacientes = await PacienteController.listarPacientes()
        console.table(pacientes)
    }

    static async listarPorCpf() {
        const cpf = input("Digite o CPF do paciente: ")
        const paciente = await PacienteController.listarPorCpf(cpf)
        console.table(paciente)
    }

    static async atualizarPaciente() {
        const id_paciente = input("Digite o ID do paciente: ")
        const nome = input("Digite o novo nome do paciente: ")
        const idade = input("Digite a nova idade do paciente: ")
        const cpf = input("Digite o novo CPF do paciente: ")
        const paciente = await PacienteController.atualizarPaciente(id_paciente, nome, idade, cpf)
        console.table(paciente)
    }

    static async removerPaciente() {
        const id_paciente = input("Digite o ID do paciente: ")
        const resultado = await PacienteController.removerPaciente(id_paciente)
        if (resultado) {
            console.log("Paciente removido com sucesso.")
        } else {
            console.log("Erro ao remover paciente.")
        }
    }
}
export default PacienteView