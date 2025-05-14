import client from "../../../config/database.js"
class ConsultaModel {
    static async agendar(id_consulta, data, hora, status, id_medico, id_paciente) {
        const dados = [id_consulta, data, hora, status, id_medico, id_paciente] 
        const consulta = `insert into consulta (id_consulta, data, hora, status, id_medico, id_paciente) values ($1, $2, $3, $4, $5, $6) returning *;`
        const resultado = await client.query(consulta, dados)   
        return resultado.rows
    }

    static async listarConsultasDeMedico(id_medico) {
        const dados = [id_medico]
        const consulta = `select * from consulta where id_medico = $1;`
        const resultado = await client.query(consulta, dados)
        return resultado.rows
    }

    static async listarConsultasDePaciente(id_paciente) {
        const dados = [id_paciente]
        const consulta = `select * from consulta where id_paciente = $1;`
        const resultado = await client.query(consulta, dados)
        return resultado.rows
    }   

    static async filtrarPorStatus(status) {
        const dados = [status]
        const consulta = `select * from consulta where status = $1;`
        const resultado = await client.query(consulta, dados)
        return resultado.rows
    }

    static async totalConsultasPorMedico(id_medico) {
        const dados = [id_medico]
        const consulta = `select count(*) from consulta where id_medico = $1;`
        const resultado = await client.query(consulta, dados)
        return resultado.rows
    }

    static async atualizarStatus(id_consulta, status) {
        const dados = [status, id_consulta]
        const consulta = `update consulta set status = $1 where id_consulta = $2;`
        const resultado = await client.query(consulta, dados)
        return resultado.rows
    }

    static async removerConsulta(id_consulta) {
        const dados = [id_consulta]
        const consulta = `delete from consulta where id_consulta = $1;`
        const resultado = await client.query(consulta, dados)
        return resultado.rows
    }
}

export default ConsultaModel
