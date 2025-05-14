import ConsultaController from "../controllers/index.js"
import PromptSync from "prompt-sync"
const input = PromptSync()


class ConsultaView {
    static async agendarConsulta() {
        const id_consulta = input("Digite o ID da consulta: ")
        const data = input("Digite a data da consulta: ")
        const hora = input("Digite a hora da consulta: ")
        const status = input("Digite o status da consulta: ")
        const id_medico = input("Digite o ID do médico: ")
        const id_paciente = input("Digite o ID do paciente: ")
        const consulta = await ConsultaController.agendar(id_consulta, data, hora, status, id_medico, id_paciente)  
        console.table(consulta)
    }

    static async listarConsultasDeMedico() {
        const id_consulta = input("Digite o ID do médico: ")
        const consultas = await ConsultaController.listarConsultasDeMedico(id_consulta)
        console.table(consultas)
    }

    static async listarConsultasDePaciente() {
        const id_consulta = input("Digite o ID do paciente: ")
        const consultas = await ConsultaController.listarConsultasDePaciente(id_consulta)
        console.table(consultas)
    }

    static async filtrarPorStatus() {
        const status = input("Digite o status da consulta: ")
        const consultas = await ConsultaController.filtrarPorStatus(status)
        console.table(consultas)
    }

    static async totalConsultasPorMedico() {
        const id_medico = input("Digite o ID do médico: ")
        const total = await ConsultaController.totalConsultasPorMedico(id_medico)
        console.log("Total de consultas do médico: ", total)
    }

    static async atualizarStatus() {
        const id_consulta = input("Digite o ID da consulta: ")
        const status = input("Digite o novo status da consulta: ")
        const consulta = await ConsultaController.atualizarStatus(id_consulta, status)
        console.table(consulta)
    }

    static async removerConsulta() {
        const id_consulta = input("Digite o ID da consulta: ")
        const consulta = await ConsultaController.removerConsulta(id_consulta)
        console.table(consulta)
    }
}

export default ConsultaView