var pool = require("./connection");

module.exports.getAllEventos = async function() {
    try {
        let sql ="Select * from Evento";
        let result = await pool.query(sql);
        let eventos = result.rows;
        return { status:200, result:eventos};
    } catch (err) {
        console.log(err);
        return { status:500, result: err};
    }
}

module.exports.getAllEventosByGestorId = async function(id) {
    try {
        let sql ="Select * from Evento where ges_id = $1";
        let result = await pool.query(sql,[id]);
        let eventos = result.rows;
        if (result.rows.length > 0)
            return {status: 200, result: eventos};
        else return{status: 404, result: {msg: "Eventos Not Found"}}
    } catch (err) {
        console.log(err);
        return { status:500, result: err};
    }
}

module.exports.getEventoById = async function(id) {
    try {
        let sql ="Select * from Evento where eve_id = $1";
        let result = await pool.query(sql,[id]);
        if (result.rows.length > 0)
            return {status: 200, result: result.rows[0]};
        else return{status: 404, result: {msg: "Evento Not Found"}}
    } catch (err) {
        console.log(err);
        return { status:500, result: err};
    }
}

module.exports.saveEvento = async function(evento) { 
    try { 
    let sql ="Insert Into evento (eve_nome, eve_beneficiario, eve_descricao, eve_datai, eve_dataf, eve_horai, eve_horaf, eve_categ, eve_maxparticipantes) Values ($1,$2,$3,$4,$5,$6,$7,$8,$9)";
    let result = await pool.query( sql , [evento.nomeId, evento.beneficiarioId, evento.descricaoId, evento.dataIId, evento.dataFId, evento.horaIId, evento.horaFId, evento.categoriaId, evento.maxPartId]); 
    return { status:200, result: result }; } catch (err) { 
               console.log(err);
               return { status:500, result: err};
           }
    } 

module.exports.changeEstado = async function(evento) { try { 
    let sql ="Update evento Set eve_estado = $1 where eve_id = $2"; 
    let result = await pool.query( sql , [ evento.estado , evento.eventoId ]); 
    return { status:200, result: result }; } catch (err) { 
                console.log(err);
                return { status:500, result: err};
            }
    }

module.exports.saveRegisto = async function(registo) { 
    try { 
    let sql ="Insert Into regista (reg_cidade, reg_concelho, reg_morada, reg_escivil, reg_escol, reg_empreg, reg_prof, reg_motiv, uti_id, eve_id) Values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)";
    let result = await pool.query( sql , [registo.cidadeId, registo.concelhoId, registo.moradaId, evento.escivilId, evento.escolaridadeId, evento.sitEmpregoId, evento.profissaoId, registo.motivacaoId, registo.utiId, registo.eventoId]); 
    return { status:200, result: result }; } catch (err) { 
                console.log(err);
                return { status:500, result: err};
            }
    } 
