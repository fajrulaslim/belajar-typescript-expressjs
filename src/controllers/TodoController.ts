import { Request, Response } from "express";
import IController from "./ControllerInterface";
import TodoService from "../services/TodoService";

const { todos } = require('../db/models');


class TodoController implements IController {
    index = async (req: Request, res: Response): Promise<Response> => {
        const service: TodoService = new TodoService(req);
        const data = await service.getAll();

        return res.send({
            message: "Get data success",
            data,
        })
    }

    create = async (req: Request, res: Response): Promise<Response> => {
        const service: TodoService = new TodoService(req);
        const data = await service.store();

        return res.send({
            message: "Create data success",
            data,
        })
    }

    show = async (req: Request, res: Response): Promise<Response> => {
        const service: TodoService = new TodoService(req);
        const data = await service.show();

        return res.send({
            message: "Create data success",
            data,
        })
    }

    update = async (req: Request, res: Response): Promise<Response> => {
        const service: TodoService = new TodoService(req);
        const data = await service.update();

        return res.send("Updated data success")
    }

    delete = async (req: Request, res: Response): Promise<Response> => {
        const service: TodoService = new TodoService(req);
        const data = await service.delete();

        return res.send("Deleted data success")
    }
}

export default new TodoController()