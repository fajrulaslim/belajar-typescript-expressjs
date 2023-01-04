import BaseRoutes from "./BaseRouter";
import UserController from "../controllers/UserController";
import { auth } from "../middlewares/AuthMiddleware"

class UserRoutes extends BaseRoutes {
    public routes(): void {
        this.router.get("/", auth, UserController.index)
        this.router.post("/", auth, UserController.create)
        this.router.get("/:id", auth, UserController.show)
        this.router.put("/:id", auth, UserController.update)
        this.router.delete("/:id", auth, UserController.delete)
    }
}

export default new UserRoutes().router