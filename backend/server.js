// DESC: Main for serving the backend
import express from "express" ;
import path from "path" ;
import dotenv from "dotenv" ;

dotenv.config();
const app = express();


app.get("/", (req, res)=>{
    res.send("API is running") ;
})

const __dirname = path.resolve() ;
if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/build"))) ;

    app.get("*", (req, res)=> res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html")) )
}

const PORT = process.env.PORT || 5000 ;
app.listen(PORT, console.log(`Server is running`)) ;
