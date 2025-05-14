import client from "../../../config/database.js"

class PacienteModel {
    static async cadastrarPaciente (id_paciente, nome, cpf, telefone) {
        const dados = [id_paciente, nome, cpf, telefone]
        const consulta = `insert into paciente (id_paciente, nome, cpf, telefone) values ($1, $2, $3, $4) returning *;`
        const resultado = await client.query(consulta, dados)
        return resultado.rows
    }

    static async listarPacientes () {
        const consulta = `select * from paciente;`
        const resultado = await client.query(consulta)
        return resultado.rows
    }

    static async BuscarPorCpf (cpf) {
        const dados = [cpf]
        const consulta = `select * from paciente where cpf = $1;`
        const resultado = await client.query(consulta, dados)
        return resultado.rows
    }

    static async atualizarPaciente (id_paciente, nome, cpf, telefone) {
        const dados = [nome, cpf, telefone, id_paciente]
        const consulta = `update paciente set nome = $1, cpf = $2, telefone = $3 where id_paciente = $4;`
        const resultado = await client.query(consulta, dados)
        return resultado.rows
    }

    static async removerPaciente(id_paciente) {
        const dados = [id_paciente];
        const consultaVerificar = `select * from consulta where id_paciente = $1;`
        const resultadoVerificar = await client.query(consultaVerificar, dados)

        if (resultadoVerificar.rows.length > 0) {
            throw new Error("Não é possível remover o paciente, ele possui consultas associadas.")
        }

        const consultaRemover = `delete from paciente where id_paciente = $1;`
        await client.query(consultaRemover, dados)
        return { message: "Paciente removido com sucesso." }
    }
} 

export default PacienteModel