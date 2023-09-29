import express from "express";
import bodyParser from "body-parser"
import router from "../routes/index.routes.js";
import middle from '../middlewares/index.middleware.js'
import pgService from "../services/pg.services.js";
import { exports } from "./default.js";
export default class Server{

    constructor(){

        this.app=express();
        this.port= exports.port
    }
    async conecctionDb(){
        new pgService();
    }

    middleware(){
        this.app.use(bodyParser.json());
        this.app.use(middle);
        this.app.use(express.json());
    }

    routes(){
        this.app.use(router);
    }

    runserver(){
        this.app.listen(this.port ,()=>{
            console.log("Corriendo")
        })
    }

    load(){
        this.conecctionDb();
        this.middleware();
        this.routes();
        this.runserver();
    }
}