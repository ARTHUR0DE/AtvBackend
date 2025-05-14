import { copyFileSync } from "fs";
import CriarTabela from "./src/config/criar_tabela.js";
import PromptSync from "prompt-sync"
import ConsultaView from "./src/modules/consulta/views/index.js";
import MedicoView from "./src/modules/medico/views/index.js";
import PacienteView from "./src/modules/paciente/views/index.js";

const input = PromptSync()

async function criarTabelas() {
    try {
        await CriarTabela.medico()
        await CriarTabela.paciente()
        await CriarTabela.consulta()
        console.log("Deu certo")
    } catch (error) {
        console.error(error.message)
    }

}

 async function menuPrincipal() {
    while (true) {
        console.log("\nMenu Principal:")
        console.log("1. Gerenciar Consultas")
        console.log("2. Gerenciar Médicos")
        console.log("3. Gerenciar Pacientes")
        console.log("4. Sair")

        const opcao = input("Escolha uma opção: ")

        switch (opcao) {
            case "1":
              await  menuConsulta()
                break
            case "2":
               await menuMedico()
                break
            case "3":
              await  menuPaciente()
                break
            case "4":
                console.log("Saindo...")
                return
            default:
                console.log("Opção inválida. Tente novamente.")
        }
    }
}

async function menuConsulta() {
    while (true) {
        console.log("\nMenu de Consultas:")
        console.log("1. Adicionar consulta.")
        console.log("2. Listar consultas de um medico.")
        console.log("3. Total de consultas por medico.")
        console.log("4. Listar consultas por paciente")
        console.log("5. Atualizar status de consulta");
        console.log("6. Filtrar por status")
        console.log("7. Remover consulta")
        console.log("8. Voltar ao menu principal")

        const opcao = input("Escolha uma opção: ")

        switch (opcao) {
            case "1":
               await ConsultaView.agendarConsulta()
                break
            case "2":
               await ConsultaView.listarConsultasDeMedico()
                break
            case "3":
               await ConsultaView.totalConsultasPorMedico()
                break
            case "4":
               await ConsultaView.listarConsultasDePaciente()
                break
            case "5":
               await ConsultaView.atualizarStatus()
                break
            case "6":
               await ConsultaView.filtrarPorStatus()
                break
            case "7":
               await ConsultaView.removerConsulta()
                break
            case "8":
                return
            default:
                console.log("Opção inválida. Tente novamente.")
        }
    }
}

async function menuMedico() {
    while (true) {
        console.log("\nMenu de Médicos:")
        console.log("1. Consultar médico por CRM")
        console.log("2. Listar todos os médicos")
        console.log("3. Adicionar médico")
        console.log("4. Atualizar médico")
        console.log("5. Remover médico")
        console.log("6. Voltar ao menu principal")

        const opcao = input("Escolha uma opção: ")

        switch (opcao) {
            case "1":
               await MedicoView.listarPorCrm()
                break
            case "2":
              await  MedicoView. listarMedicos()
                break
            case "3":
               await MedicoView.cadastrarMedico()
                break
            case "4":
               await MedicoView.atualizarMedico()
                break
            case "5":
               await MedicoView.removerMedico()
                break
            case "6":
                return
            default:
                console.log("Opção inválida. Tente novamente.")
        }
    }
}

async function menuPaciente() {
    while (true) {
        console.log("\nMenu de Pacientes:")
        console.log("1. Adicionar paciente")
        console.log("2. Listar pacientes")
        console.log("3. Listar pacientes por CPF")
        console.log("4. Atualizar paciente")
        console.log("5. Remover paciente")
        console.log("6. Voltar ao menu principal")

        const opcao = input("Escolha uma opção: ")

        switch (opcao) {
            case "1":
               await PacienteView.cadastrarPaciente()
                break
            case "2":
               await PacienteView.listarPacientes()
                break
            case "3":
               await PacienteView.listarPorCpf()
                break
            case "4":
               await PacienteView.atualizarPaciente()
                break
            case "5":
               await PacienteView.removerPaciente()
                break
            case "6":
                return
            default:
                console.log("Opção inválida. Tente novamente.")
        }
    }
}

menuPrincipal()
