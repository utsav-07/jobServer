import express from "express";
import { getAllData, getJobData } from "../controller/data.controller.js";

const router =  express.Router();

router.route('/').get(getAllData);
router.route('/getData').get(getJobData)


export default router;