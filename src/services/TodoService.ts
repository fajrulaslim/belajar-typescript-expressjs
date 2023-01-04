import { Request } from "express";

const { todos } = require('../db/models');

class TodoService {
    credential: { 
        id: number 
    };
    body: Request['body'];
    params: Request['params'];

    constructor(req: Request) {
        this.credential = req.app.locals.credential;
        this.body = req.body;
        this.params = req.params;
    }

    getAll = async () => {
        const data = await todos.findAll({ 
            where: { user_id: this.credential.id },
            attributes: ['id', 'description']
        })
        return data;
    }

    store = async () => {
        const { description } = this.body;
        const data = await todos.create({
            user_id: this.credential.id,
            description
        })
        return data;
    }

    show = async () => {
        const { id } = this.params;
        const data = await todos.findOne({ where: { id, user_id: this.credential.id }});
        return data;
    }

    update = async () => {
        const { id } = this.params;
        const { description } = this.body;
        const data = await todos.update(
            { description },
            { where: { id, user_id: this.credential.id }}
        )
        return data;
    }

    delete = async () => {
        const { id } = this.params;

        const data = await todos.destroy({ 
            where: { id, user_id: this.credential.id }
        })
    }
}

export default TodoService;