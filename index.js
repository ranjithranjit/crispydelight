import express from 'express';
import {dirname} from 'path';
import {fileURLToPath} from 'url';



const __dirname = dirname(fileURLToPath(import.meta.url));

const port = 300;
const app = express();

app.use(express.static('public'));

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/public/index.html");
});


app.get("/about",(req, res)=>{
    res.sendFile(__dirname+"/public/htmls/about.html")
});

app.get("/contact",(req, res)=>{
    res.sendFile(__dirname+"/public/htmls/contact.html")
});


app.listen(port, ()=>{
    console.log(`The Server is running in ${port}`);
});


