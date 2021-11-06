var pool = require("./connection");

module.exports.saveRegisto = async function(registo) { 
    try { 
    let sql ="Insert Into regista (reg_cidade, reg_concelho, reg_morada, reg_escivil, reg_escol, reg_empreg, reg_prof, reg_motiv, uti_id, eve_id) Values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)";
    let result = await pool.query( sql , [registo.cidadeId, registo.concelhoId, registo.moradaId, evento.escivilId, evento.escolaridadeId, evento.sitEmpregoId, evento.profissaoId, registo.motivacaoId, registo.utiId, registo.eventoId]); 
    return { status:200, result: result }; } catch (err) { 
                console.log(err);
                return { status:500, result: err};
            }
    } 