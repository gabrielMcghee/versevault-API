import { Router } from "express";
import {
    getAllVerses,
    getVerseById,
    createVerse,
    updateVerse,
    deleteVerse
} from "../controllers/verseController";

const router = Router();

router.get("/", getAllVerses);
router.get("/:id", getVerseById);
router.post("/", createVerse);
router.put("/:id", updateVerse);
router.delete("/:id", deleteVerse);

export default router;