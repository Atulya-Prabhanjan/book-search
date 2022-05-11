var express = require("express");
var mysql = require("mysql");
var cors = require("cors");
const app = express();
const port = 5000;
var connection = mysql.createConnection({
    user: "newuser",
    host: "localhost",
    database:"test",
    password: "Atuly@2002",
    port: 3305
});
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
app.use(cors());
app.use(express.json());
app.use(express.text());
app.use(express.static('public'));

app.listen(port, (error) => {
    if(error)
        console.log('error: '+error);
    else
        console.log('Up and Running!');
});

app.get('/',search)

function search(request, response) {
    console.log(request.query);
    var q = request.query['search'];
    console.log("search was: "+q);
    sql="SELECT id,name,author,rating,src,synopsis FROM book WHERE name LIKE '%"+q+"%' OR genre LIKE '%"+q+"%' OR author LIKE '%"+q+"%' OR language LIKE '%"+q+"%'";
    connection.query(sql, function(error, results) {
        if (error) {
            console.log("Error detected");
            throw error;
        } else {
            console.log("yes"+results);
            response.send(results);
        }
    })
}