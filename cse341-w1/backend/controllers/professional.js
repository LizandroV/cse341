import userModel from '../models/userModel.js';

class professionalController{
    constructor(){
        this.professional=[]
    }

    async create(req,res){
        try{
            const data = await userModel.create(req,res);
            res.status(201).json(data); 
        }catch(error){
            res.status(500).json({message: `Error al crear usuario, Error: ${error}`})
        }
    }

    async update(req,res){
        try{
            const { id } = req.params;
            const data = await userModel.update(id, req.body);
            res.status(200).json(data); 
        }catch(error){
            res.status(500).json({message: `Error al actualizar usuario, Error: ${error}`})
        }
    }

    async delete(req,res){
        try{
            const { id } = req.params;
            const data = await userModel.delete(id);
            res.status(200).json(data); 
        }catch(error){
            res.status(500).json({message: `Error al eliminar usuario, Error: ${error}`})
        }
    }

    async getOne(req,res){
        try{
            const { id } = req.params;
            const data = await userModel.getOne(id);
            res.status(200).json(data); 
        }catch(error){
            res.status(500).json({message: `Error al encontrar usuario, Error: ${error}`})
        }
    }

    async getAll(req,res){
        try{
            const { id } = req.params;
            const data = await userModel.getAll();
            res.status(200).json(data); 
        }catch(error){
            res.status(500).json({message: `Error al encontrar usuario, Error: ${error}`})
        }
    }

}

export default new professionalController();