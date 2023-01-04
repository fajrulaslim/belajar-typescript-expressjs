import { Request, Response } from "express";
import Authentication from "../utils/Authentication";

const { Users } = require('../db/models');

class AuthController {
    register = async (req: Request, res: Response): Promise<Response> => {
        let { username, password } = req.body;
        const hashPassword: string = await Authentication.passwordHash(password);

        const createUser = await Users.create({ username, password: hashPassword });
        return res.send("Register success.")
    }

    login = async (req: Request, res: Response): Promise<Response> => {
        // Cari data username
        let { username, password } = req.body;
        const user = await Users.findOne({ where: { username }});

        // cek password
        let compare = await Authentication.passwordCompare(password, user.password)

        // generate token
        if(compare) {
            let token = Authentication.generateToken(user.id, username, user.password)
            return res.send({ token })
        }

        return res.send(user)
    }

    profile = async (req: Request, res: Response): Promise<Response> => {
        return res.send('Profile user')
    }
}

export default new AuthController()