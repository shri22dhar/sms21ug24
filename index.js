const express =require("express");
const cors =require("cors");
const mysql =require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());
	
const con = mysql.createConnection({
	host:"sql12.freesqldatabase.com",
	user:"sql12727271",
	password:"nFa6tyYuH7",
	database:"sql12727271"

});

app.post("/save",(req,res)=>{
	let data =[req.body.rno,req.body.name,req.body.marks];
	console.log(data);
	let sql ="insert into student values(?,?,?)";
	con.query(sql,data,(err,result)=>{
		if(err)		res.send(err);
		else			res.send(result);
	});
	

});

app.get("/getstu",(req,res)=>{
	let sql = "select * from student";
	con.query(sql,(err,result)=>{
		if(err)		res.send(err);
		else			res.send(result);
	});
});

app.delete("/delstu",(req,res)=>{
	let data =[req.body.rno];
	let sql ="delete from student where rno=?";
	con.query(sql,data,(err,result)=>{
		if(err)		res.send(err);
		else			res.send(result);
	});
});

app.put("/upstu",(req,res)=>{
	let data =[req.body.name,req.body.marks,req.body.rno];
	let sql ="update student set name=?,marks=? where rno=?";
	con.query(sql,data,(err,result)=>{
		if(err)		res.send(err);
		else			res.send(result);
	});
});

app.listen(9000,()=>{console.log("ready@9000");});