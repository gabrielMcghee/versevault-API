import { Request, Response } from "express";
import { db } from "../db";
import { Verse } from "../models/Verse";

export const getAllVerses = (req: Request, res: Response): void => {
    db.query("SELECT * FROM verses", (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(200).json(results);
    });
};

export const getVerseById = (req: Request, res: Response): void => {
    const id = req.params.id;

    db.query("SELECT * FROM verses WHERE id = ?", [id], (err, results: any) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        if (results.length === 0) {
            res.status(404).json({ message: "Verse not found." });
            return;
        }

        res.status(200).json(results[0]);
    });
};

export const createVerse = (req: Request, res: Response): void => {
    const { book, chapter, verse, text, topic }: Verse = req.body;

    db.query(
        "INSERT INTO verses (book, chapter, verse, text, topic) VALUES (?, ?, ?, ?, ?)",
        [book, chapter, verse, text, topic],
        (err, result: any) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            res.status(201).json({
                message: "Verse created successfully.",
                id: result.insertId
            });
        }
    );
};

export const updateVerse = (req: Request, res: Response): void => {
    const id = req.params.id;
    const { book, chapter, verse, text, topic }: Verse = req.body;

    db.query(
        "UPDATE verses SET book = ?, chapter = ?, verse = ?, text = ?, topic = ? WHERE id = ?",
        [book, chapter, verse, text, topic, id],
        (err, result: any) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            if (result.affectedRows === 0) {
                res.status(404).json({ message: "Verse not found." });
                return;
            }

            res.status(200).json({ message: "Verse updated successfully." });
        }
    );
};

export const deleteVerse = (req: Request, res: Response): void => {
    const id = req.params.id;

    db.query("DELETE FROM verses WHERE id = ?", [id], (err, result: any) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        if (result.affectedRows === 0) {
            res.status(404).json({ message: "Verse not found." });
            return;
        }

        res.status(200).json({ message: "Verse deleted successfully." });
    });
};