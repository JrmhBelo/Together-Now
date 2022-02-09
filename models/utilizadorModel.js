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

module.exports.loginUtilizador = async function(email,pass) { // esta feito ☻
    try {
        let sql ="Select * from utilizador where uti_email = $1 and uti_pass = $2";
        let result = await pool.query(sql,[email,pass]);
        if (result.rows.length > 0)
            return { status:200, result:result.rows[0]};
        else return { status:401, result: {msg: "▬▬ Wrong email or password"}};
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

//Feito
module.exports.createUtilizador = async function (utilizador) {
       try {
      let sql =
        "insert into utilizador(uti_nomep, uti_nomeu, uti_email, uti_pass, uti_telemovel, uti_genero) values($1,$2,$3,$4,$5,$6);";
      let result = await pool.query(sql, [utilizador.nomepId, utilizador.nomeuId, utilizador.email, utilizador.pass, utilizador.telemovelId, utilizador.uti_generoId,
      ]);
      return { status: 200, result: result };
    } catch (error) {
      console.log(error);
      return { status: 500, result: error };
    }
  };