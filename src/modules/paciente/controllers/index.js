import PacienteModel from "../models"

class PacienteController {
    static async cadastrarPaciente(id_paciente, nome, cpf, telefone) {
        try {
            if (!id_paciente || !nome || !cpf || !telefone) {
                return console.error("Todos os campos são obrigatórios.")
            }
            const paciente = await PacienteModel.cadastrarPaciente(id_paciente, nome, cpf, telefone)
            return paciente
        } catch (error) {
            console.error("Erro ao cadastrar paciente:", error.message)
        }
    }

    static async listarPacientes() {
        try {
            const pacientes = await PacienteModel.listarPacientes()
            if (pacientes.length === 0) {
                return console.log("Nenhum paciente encontrado.")
            }
            console.log("Lista de pacientes: ")
            return pacientes
        } catch (error) {
            console.error("Erro ao listar pacientes: ", error.message)
        }
    }

    static async buscarPorCpf(cpf) {
        try {
            const paciente = await PacienteModel.BuscarPorCpf(cpf)
            if (paciente.length === 0) {
                return console.log("Nenhum paciente encontrado com esse CPF.")
            }
            console.log("Paciente encontrado: ")
            return paciente
        } catch (error) {
            console.error("Erro ao buscar paciente por CPF: ", error.message)
        }
    }

    static async atualizarPaciente(id_paciente, nome, cpf, telefone) {
        try {
            if (!id_paciente || !nome || !cpf || !telefone) {
                return console.error("Todos os campos são obrigatórios.")
            }
            const paciente = await PacienteModel.atualizarPaciente(id_paciente, nome, cpf, telefone)
            return paciente
        } catch (error) {
            console.error("Erro ao atualizar paciente:", error.message)
        }
    }

    static async removerPaciente(id_paciente) {
        try {
            const resultado = await PacienteModel.removerPaciente(id_paciente)
            return resultado
        } catch (error) {
            console.error("Erro ao remover paciente:", error.message)
        }
    }
}

export default PacienteController