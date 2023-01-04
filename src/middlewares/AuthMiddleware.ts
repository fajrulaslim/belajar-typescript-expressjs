import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const auth = (req: Request, res: Response, next: NextFunction): any => {
    const authHeader: string = req.headers.token as string;
    if(!authHeader) {
        return res.status(401).send("User not authenticated")
    }

    let secretKey: string = process.env.JWT_SECRET_KEY as string || 'secret';
    const token: string = authHeader.split(" ")[1];

    try {
        const credential: string | object = jwt.verify(token, secretKey);

        if(credential) {
            req.app.locals.credential = credential
            return next();
        }
        return res.status(404).send("Invalid token")
        
    } catch (error) {
        return res.status(401).send(error)
    }
}