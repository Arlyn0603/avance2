const sql = require("mssql");


const config = {
    user: "Anita", // Reemplázalo con tu usuario de SQL Server
    password: "Fgjdal123.", // Reemplázalo con tu contraseña
    server: "ANAPC", // Reemplázalo con la dirección IP de tu servidor SQL Server
    database: "EventosDB",
    options: {
        encrypt: false, // Desactiva en local, pero actívalo en producción
        trustServerCertificate: true // Solo si usas autenticación de Windows
    }
};

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log("✅ Conexión a SQL Server exitosa");
        return pool;
    })
    .catch(err => {
        console.error("❌ Error en la conexión a SQL Server", err);
    });

module.exports = {
    sql, poolPromise
};
