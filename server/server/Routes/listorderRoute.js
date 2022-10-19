import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";

const router = Router();

router.post("/", indexCtrl.listorderCtrl.create);
router.get("/list", indexCtrl.listorderCtrl.findAll);
export default router;
