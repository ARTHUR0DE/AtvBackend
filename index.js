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

function menu() {
    while (true) {
        console.log("\nMenu:");
        console.log("1. Consultar dados de consultas");
        console.log("2. Consultar dados de médicos");
        console.log("3. Consultar dados de pacientes");
        console.log("4. Adicionar médico");
        console.log("5. Adicionar paciente");
        console.log("6. Adicionar consulta");
        console.log("7. Atualizar médico");
        console.log("8. Atualizar paciente");
        console.log("9. Atualizar consulta");
        console.log("10. Remover médico");
        console.log("11. Remover paciente");
        console.log("12. Remover consulta");
        console.log("13. Sair");

        const opcao = input("Escolha uma opção: ");

        switch (opcao) {
            case "1":
            ConsultaView.consultar();
            break;
            case "2":
            MedicoView.consultar();
            break;
            case "3":
            PacienteView.consultar();
            break;
            case "4":
            MedicoView.adicionar();
            break;
            case "5":
            PacienteView.adicionar();
            break;
            case "6":
            ConsultaView.adicionar();
            break;
            case "7":
            MedicoView.atualizar();
            break;
            case "8":
            PacienteView.atualizar();
            break;
            case "9":
            ConsultaView.atualizar();
            break;
            case "10":
            MedicoView.remover();
            break;
            case "11":
            PacienteView.remover();
            break;
            case "12":
            ConsultaView.remover();
            break;
            case "13":
            console.log("Saindo...");
            return;
            default:
            console.log("Opção inválida. Tente novamente.");
        }
        }
    }

    menu();
