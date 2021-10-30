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
