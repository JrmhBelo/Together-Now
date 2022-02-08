var pool = require("./connection");

module.exports.getAllGestores = async function() {
    try {
        let sql ="Select * from GestorEvento";
        let result = await pool.query(sql);
        let gestores = result.rows;
        return { status:200, result:gestores};
    } catch (err) {
        console.log(err);
        return { status:500, result: err};
    }
}

module.exports.getGestorById = async function(id) {
    try {
        let sql ="Select * from gestorevento where ges_id = $1";
        let result = await pool.query(sql,[id]);
        if (result.rows.length > 0)
            return {status: 200, result: result.rows[0]};
        else return{status: 404, result: {msg: "Gestor Not Found"}}
    } catch (err) {
        console.log(err);
        return { status:500, result: err};
    }
}

module.exports.loginGestor = async function(email,pass) { // novo para testar
    try {
        let sql ="Select * from gestorevento where ges_email = $1 and ges_pass = $2";
        let result = await pool.query(sql,[email,pass]);
        if (result.rows.length > 0)
            return { status:200, result:result.rows[0]};
        else return { status:401, result: {msg: "GES - Wrong email or password"}};
    } catch (err) {
        console.log(err);
        return { status:500, result: err};
    }
}

