var pool = require("./connection");

module.exports.saveRegisto = async function(registo) { 
    try { 
    let sql ="Insert Into regista (reg_morada, reg_civil, reg_escol, reg_empreg, reg_prof, reg_motiv, uti_id, eve_id, reg_cidade, reg_concelho) Values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)";
    let result = await pool.query( sql , [registo.moradaId, registo.escivilId, registo.escolaridadeId, registo.sitEmpregoId, registo.profissaoId, registo.motivacaoId, registo.utiId, registo.eventoId, registo.cidadeId,registo.concelhoId]); 
    return { status:200, result: result }; } catch (err) { 
                console.log(err);
                return { status:500, result: err};
            }
    } 