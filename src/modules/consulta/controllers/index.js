import ConsultaModel from "../models"


class ConsultaController {
    static async agendar(id_consulta, data, hora, status, id_medico, id_paciente) {
        try {
            if (!id_consulta || !data || !hora || !status || !id_medico || !id_paciente) {
                return console.error("Todos os campos são obrigatórios.")
            }
            const consulta = await ConsultaModel.agendar(id_consulta, data, hora, status, id_medico, id_paciente)
            return consulta
        } catch (error) {
            console.error("Erro ao agendar consulta:", error.message)   
        }
    }

    static async listarConsultasDeMedico(id_consulta) {
        try {
            const consultas = await ConsultaModel.listarConsultasDeMedico(id_consulta)
            if (consultas.length === 0) {
                return console.log("Nenhuma consulta encontrada para o médico.")
            }
            console.log("Consultas do médico: ")
            return consultas
    } catch (error) {
            console.error("Erro ao listar consultas do médico: ", error.message)
        }

    }
    static async listarConsultasDePaciente(id_consulta) {
        try {
            const consultas = await ConsultaModel.listarConsultasDePaciente(id_consulta)
            if (consultas.length === 0) {
                return console.log("Nenhuma consulta encontrada para o paciente.")
            }
            console.log("Consultas do paciente: ")
            return consultas
        } catch (error) {
            console.error("Erro ao listar consultas do paciente: ", error.message)
        }
    }
    static async filtrarPorStatus(status) {
        try {
            const consultas = await ConsultaModel.filtrarPorStatus(status)
            if (consultas.length === 0) {
                return console.log("Nenhuma consulta encontrada com esse status.")
            }
            console.log("Consultas filtradas por status: ")
            return consultas
        } catch (error) {
            console.error("Erro ao filtrar consultas por status: ", error.message)
        }
    }
    static async totalConsultasPorMedico(id_medico) {
        try {
            const total = await ConsultaModel.totalConsultasPorMedico(id_medico)
            if (total.length === 0) {
                return console.log("Nenhuma consulta encontrada para o médico.")
            }
            console.log("Total de consultas do médico: ", total[0].count)
            return total[0].count
        } catch (error) {
            console.error("Erro ao contar consultas do médico: ", error.message)
        }
    }
    static async atualizarStatus(id_consulta, status) {
        try {
            const consulta = await ConsultaModel.atualizarStatus(id_consulta, status)
            if (consulta.length === 0) {
                return console.log("Nenhuma consulta encontrada para atualizar.")
            }
            console.log("Status da consulta atualizado com sucesso!")
            return consulta
        } catch (error) {
            console.error("Erro ao atualizar status da consulta: ", error.message)
        }
    }
}

export default ConsultaController