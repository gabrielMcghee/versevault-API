import mysql from "mysql2";

export const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    port: 3306,
    database: "versevault"
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err.message);
    } else {
        console.log("Connected to MySQL database.");
    }
});