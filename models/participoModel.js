var pool = require("./connection");

module.exports.saveParticipo = async function(participo) { 
    try { 
    let sql ="Insert Into participa (eve_id, uti_id) Values ($1,$2)";
    console.log(participo)
    let result = await pool.query( sql , [participo.eventoId, participo.utiId]); 
    return { status:200, result: result }; } catch (err) { 
                console.log(err);
                return { status:500, result: err};
            }
    } 