import { Request, Response } from "express";
import IController from "./ControllerInterface";

let data: any[] = [
    { id: 1, name: "Budi" },
    { id: 2, name: "Cahya" },
    { id: 3, name: "Siti" },
]

class UserController implements IController {
    index(req: Request, res: Response): Response {
        return res.send(data)
    }

    create(req: Request, res: Response): Response {
        const { id, name } = req.body;
        data.push({ id: id, name: name })
        return res.send("Create data success")
    }

    show(req: Request, res: Response): Response {
       const { id } = req.params;
       let user = data.find(item => item.id == id)
       return res.send(user)
    }

    update(req: Request, res: Response): Response {
        const { id } = req.params;
        const { name } = req.body;

        let user = data.find(item => item.id == id)
        user.name = name;
        return res.send("Update data success")
    }

    delete(req: Request, res: Response): Response {
        const { id } = req.params;
        let users = data.filter(item => item.id != id)
        return res.send(users)
    }
}

export default new UserController()