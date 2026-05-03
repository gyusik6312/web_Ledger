const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "ledger_db",
  port: 3307   
});

db.connect(err => {
  if (err) {
    console.log("DB 연결 실패", err);
  } else {
    console.log("DB 연결 성공");
  }
});

app.get("/api/ledger", (req, res) => {
  db.query("select * from ledger", (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/api/ledger", (req, res) => {
  const {ledger_date, ledger_title, ledger_content, amount} = req.body;
  db.query(
    "insert into ledger(ledger_date, ledger_title, ledger_content, amount) values(?, ?, ?, ?)",
    [ledger_date, ledger_title, ledger_content, amount],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({
        message: "추가 성공",
      })
    });
});

app.listen(5000, () => {
  console.log("서버 실행중 (5000)");
});