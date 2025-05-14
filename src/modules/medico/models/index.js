import client from "../../../config/database.js"

class MedicoModel {
    static async cadastrarMedico(id_medico, nome, especialidade, crm) {
    const dados = [id_medico, nome, especialidade, crm]
    const consulta = `insert into medico (id_medico, nome, especialidade, crm) values($1, $2, $3, $4) returning *;`
    const resultado = await client.query(consulta, dados)
    return resultado.rows
}
    static async listarMedicos() {
        const consulta = `select * from medico;`
        const resultado = await client.query(consulta)
        return resultado.rows
    }

    static async listarPorCrm (crm) {
        const dados = [crm]
        const consulta = `select * from medico where crm = $1;`
        const resultado = await client.query(consulta, dados)
        return resultado.rows
    }

    static async AtualizarMedico (id_medico, nome, especialidade, crm) {
        const dados = [nome, especialidade, crm, id_medico]
        const consulta = `update medico set nome = $1, especialidade = $2, crm = $3 where id_medico = $4;`
        const resultado = await client.query(consulta, dados)
        return resultado.rows
    }   

    static async removerMedico(id_medico) {
        const dados = [id_medico];
        const consultaVerificar = `select * from consulta where id_medico = $1;`
        const resultadoVerificar = await client.query(consultaVerificar, dados)

        if (resultadoVerificar.rows.length > 0) {
            console.error("Não é possível remover o médico, pois ele possui consultas associadas.")
        }

        const consultaRemover = `delete from medico where id_medico = $1;`
        const resultadoRemover = await client.query(consultaRemover, dados)
        return resultadoRemover.rowCount > 0
    }
}
export default MedicoModel