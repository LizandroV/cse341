import { MongoClient } from 'mongodb';
import 'dotenv/config';

class dbClient{
    constructor(){
        const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/`;
        this.client = new MongoClient(queryString);
        this.connect();
    }

    async connect(){
        try{
            await this.client.connect();
            this.db = this.client.db('test');
            console.log("Conectado a la Base de Datos")
        } catch(error){
            console.log(`Error al conectar a la Base de Datos, Error ${error}`)
        }
    }
}

export default new dbClient;