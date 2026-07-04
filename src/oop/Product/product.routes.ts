import { Router } from "express";
import   ProductController from "./product.controllers.js";

const router = Router();

router.post("/", ProductController.create);

router.patch("/:id/rename", ProductController.rename);




export default router;