import { copyFileSync } from "fs";
import CriarTabela from "./src/config/criar_tabela.js";
import PromptSync from "prompt-sync"

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

criarTabelas()