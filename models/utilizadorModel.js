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
        let sql ="Select * from Utilizador where uti_id = $1";
        let result = await pool.query(sql,[id]);
        if (result.rows.length > 0)
            return {status: 200, result: result.rows[0]};
        else return{status: 404, result: {msg: "Utilizador Not Found"}}
    } catch (err) {
        console.log(err);
        return { status:500, result: err};
    }
}

module.exports.loginUtilizador = async function(email,pass) {
    try {
        let sql ="Select * from utilizador where uti_email = $1 and uti_password = $2";
        let result = await pool.query(sql,[email,pass]);
        if (result.rows.length > 0)
            return { status:200, result:result.rows[0]};
        else return { status:401, result: {msg: "Wrong email or password"}};
    } catch (err) {
        console.log(err);
        return { status:500, result: err};
    }
}

module.exports.getUtilizadorEventos = async function(id) { 
    //eventos inscritos do utlilizador x
    try {
        let sql =
        `Select evento.* 
        from utilizador inner join regista 
        on utilizador.uti_id = regista.uti_id inner join evento
        on regista.eve_id = evento.eve_id
        where utilizador.uti_id = $1`;
        let result = await pool.query(sql,[id]);
        let units = result.rows;
        return { status:200, result:units};
    } catch (err) {
        console.log(err);
        return { status:500, result: err};
    }
}

module.exports.getUtilizadorEstatisticas = async function(id) {  
    //envio dos utilizadores registados do event z
    try {   
        let sql =
        `SELECT *,  evento.eve_id 
        from utilizador
        inner join regista
        On utilizador.uti_id=regista.uti_id
        left join evento
        on regista.eve_id=evento.eve_id
        where evento.eve_id=$1`;
        let result = await pool.query(sql,[id]);
        let units = result.rows;
        return { status:200, result:units};
    } catch (err) { 
        console.log(err);
        return { status:500, result: err};
    }
}