import express from "express";
import { getAllData } from "../controller/data.controller.js";

const router =  express.Router();

router.route('/').get(getAllData);


export default router;