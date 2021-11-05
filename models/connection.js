var pg = require('pg');

const connectionString = "postgres://zpnpenyayeuthw:67d6e92f69dcab3d143df87ef09c84abc16c957ddb28bf326057316d6043bb1d@ec2-54-220-14-54.eu-west-1.compute.amazonaws.com:5432/d7q446v5vta2tm"
const Pool = pg.Pool
const pool = new Pool({
    connectionString,
    max: 10,
    ssl: {
        require: true, 
        rejectUnauthorized: false
    }
})

module.exports = pool;
