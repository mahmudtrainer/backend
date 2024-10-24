import { Request, Response } from "express";
import { chapterService } from "./chapterService";


const createChapter = async(req : Request, res : Response)=>{

    const result = await chapterService.createChapterIntoDB(req.body)
    res.status(200).json(result)

}

export const chapterControl = {createChapter}