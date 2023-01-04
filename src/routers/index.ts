import { Router, Request, Response } from 'express'
import UserRoutes from "./UserRoutes"
import AuthRoutes from "./AuthRoutes"
import TodoRoutes from "./TodoRoutes"

const router = Router()

router.route("/api/v1").get((req: Request, res: Response) => {
    res.send('Hai Express Typescript')
})
router.use('/api/v1/users', UserRoutes)
router.use('/api/v1/auth', AuthRoutes)
router.use('/api/v1/todos', TodoRoutes)

export default router