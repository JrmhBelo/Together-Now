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
    let sql ="Insert Into evento (eve_nome, eve_beneficiario, eve_descricao, eve_data, eve_datai, eve_dataf, eve_categ, eve_maxparticipantes, eve_lati, eve_lon) Values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)";
    let result = await pool.query( sql , [evento.nomeId, evento.beneficiarioId, evento.descricaoId, evento.dataId, evento.dataIID, evento.dataFId, evento.categoriaId, evento.maxPartId, evento.eve_lati, evento.eve_lon]); 
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

