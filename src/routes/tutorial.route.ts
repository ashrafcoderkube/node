//tutorial.route.ts

import {Router}from "express";
import insertNewTutorial from "../controllers/tutorial.controller";
import insertCodeLibrary from "../controllers/library.controller";

const router = Router()

router.post("/tutorial" , insertNewTutorial)
router.post("/codelibrary" , insertCodeLibrary)

export default router;