const pool = require('../../config/database');

module.exports = {
    create: (data, callback) => {
        pool.query(
            `insert into user(mobile,pass,type)values(?,?,?)`,
            [
                data.mobile,
                data.pass,
                data.type
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                console.log(results);
                return callback(null, results);
            }
        );
    }
};