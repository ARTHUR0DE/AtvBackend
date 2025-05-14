import dotenv from 'dotenv'
dotenv.config()
import client from './database.js'

class CriarTabela {
    static async medico() {
    const consulta = `create table if not exists medico(
        id_medico integer primary key,
        nome varchar(100) not null,
        especialidade varchar(50) not null,
        crm varchar(10) not null
    );`
    await client.query(consulta)
    console.log("Tabela médico criada com sucesso!")
    }
    static async paciente() {
    const consulta = `create table if not exists paciente(
    nome varchar(100) not null,
    id_paciente integer not null primary key,
    CPF char(11) not null,
    telefone varchar(15) not null
    );`
    await client.query(consulta)
    console.log("Tabela paciente criada com sucesso!")
    }
    static async consulta() {
    const consulta = `create table if not exists consulta(
        id_consulta integer primary key,
        data date not null,
        hora time not null,
        status text not null, 
        id_medico integer references medico(id_medico),
        id_paciente integer references paciente(id_paciente)
    );`
    await client.query(consulta)
    console.log("Tabela consulta criada com sucesso!")
    }
}


export default CriarTabela