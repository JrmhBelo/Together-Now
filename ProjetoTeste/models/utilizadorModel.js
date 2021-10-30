var pool = require("./connection");

module.exports.getAllUtilizadores = async function() {
    try {
        let sql ="Select * from Utilizador";
        let result = await pool.query(sql);
        let utilizadores = result.rows;
        return { status:200, result:utilizadores};
    } catch (err) {
        console.log(err);
        return { status:500, result: err};
    }
}
module.exports.getUtilizadorById = async function(id) {
    try {
        let sql ="Select * from Utilizador, where uti_id = $1";
        let result = await pool.query(sql,[id]);
        if (result.rows.length > 0)
            return {status: 200, result: result.rows[0]};
        else return{status: 404, result: {msg: "Utilizador Not Found"}}
    } catch (err) {
        console.log(err);
        return { status:500, result: err};
    }
}
