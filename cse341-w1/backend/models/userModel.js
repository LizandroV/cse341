import { ObjectId } from 'mongodb';
import dbclient from '../db/connect.js'

class userModel{
    async create(user){
        const colUser = dbclient.db.collection('user');
        return await colUser.insertOne(user);
    }

    async getAll(){
        const colUser = dbclient.db.collection('user');
        // return await colUser.find().toArray();
        return await colUser.findOne();
    }

    async getOne(id){
        const colUser = dbclient.db.collection('user');
        return await colUser.findOne({_id: new ObjectId(id)});
    }

    async update(id, user){
        const colUser = dbclient.db.collection('user');
        return await colUser.updateOne({_id: new ObjectId(id)}, {set: user});
    }

    async delete(id){
        const colUser = dbclient.db.collection('user');
        return await colUser.deleteOne({_id: new ObjectId(id)});
    }
}

export default new userModel();